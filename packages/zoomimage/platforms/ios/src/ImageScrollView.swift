//
//  ImageScrollView.swift
//  Beauty
//
//  Created by Nguyen Cong Huy on 1/19/16.
//  Copyright © 2016 Nguyen Cong Huy. All rights reserved.
//

import UIKit

@objc public protocol ImageScrollViewDelegate: UIScrollViewDelegate {
    @objc optional func imageScrollViewDidChangeOrientation(imageScrollView: ImageScrollView)
    // Single-tap callback with both view (local) & image coordinates.
    @objc optional func imageScrollViewSingleTapped(_ imageScrollView: ImageScrollView, viewPoint: CGPoint, imagePoint: CGPoint)
    // Optional callbacks for double-tap pan/zoom start/end
    @objc optional func imageScrollViewDidStartDoubleTapPan(_ imageScrollView: ImageScrollView, viewPoint: CGPoint, imagePoint: CGPoint)
    @objc optional func imageScrollViewDidEndDoubleTapPan(_ imageScrollView: ImageScrollView)
}

open class ImageScrollView: UIScrollView {
    // Gesture recognizer storage (for replacing zoomView cleanly)
    private var singleTapRecognizer: UITapGestureRecognizer?
    private var doubleTapRecognizer: UITapGestureRecognizer?
    private var doubleTapHoldRecognizer: UILongPressGestureRecognizer?
    
    // Double-tap-hold sensitivity and minimum press duration (configurable)
    @objc open var doubleTapHoldMinPressDuration: TimeInterval = 0.08
    @objc open var doubleTapPanSensitivity: CGFloat = 0.005
    
    // Interactive double-tap pan/zoom state
    private var isDoubleTapPanZooming: Bool = false
    private var doubleTapPanInitialScale: CGFloat = 1.0
    private var doubleTapPanInitialCenter: CGPoint = .zero
    private var doubleTapPanInitialTouchY: CGFloat = 0.0
    
    @objc public enum ScaleMode: Int {
        case aspectFill
        case aspectFit
        case widthFill
        case heightFill
    }
    
    @objc public enum Offset: Int {
        case begining
        case center
    }
    
    static let kZoomInFactorFromMinWhenDoubleTap: CGFloat = 2
    
    @objc open var imageContentMode: ScaleMode = .widthFill
    @objc open var initialOffset: Offset = .begining
    
    private var _zoomView: UIImageView? = nil
    @objc public var zoomView: UIImageView? {
      get {
        return self._zoomView
      }
      set {
        if (_zoomView != nil) {
            // remove previously added gestures on the old zoomView
            if let g = singleTapRecognizer { _zoomView?.removeGestureRecognizer(g); singleTapRecognizer = nil }
            if let g = doubleTapRecognizer { _zoomView?.removeGestureRecognizer(g); doubleTapRecognizer = nil }
            if let g = doubleTapHoldRecognizer { _zoomView?.removeGestureRecognizer(g); doubleTapHoldRecognizer = nil }
            _zoomView?.removeFromSuperview()
        }
        self._zoomView = newValue
        _zoomView!.isUserInteractionEnabled = true
        addSubview(_zoomView!)
        
        // --- Single-tap recognizer (reports both view & image coordinates)
        let singleTap = UITapGestureRecognizer(target: self, action: #selector(ImageScrollView.singleTapGestureRecognizer(_:)))
        singleTap.numberOfTapsRequired = 1
        
        // --- Double-tap (regular quick double-tap toggling)
        let doubleTap = UITapGestureRecognizer(target: self, action: #selector(ImageScrollView.doubleTapGestureRecognizer(_:)))
        doubleTap.numberOfTapsRequired = 2
        
        // --- Double-tap-and-hold: begin interactive "drag to zoom"
        let doubleTapHold = UILongPressGestureRecognizer(target: self, action: #selector(ImageScrollView.handleDoubleTapHold(_:)))
        doubleTapHold.numberOfTapsRequired = 2
        doubleTapHold.minimumPressDuration = doubleTapHoldMinPressDuration
        doubleTapHold.allowableMovement = 100 // allow some movement
        
        // Interaction rules:
        // - If the user starts panning (scrollView's pan recognizes), cancel double-tap toggle.
        // - If the double-tap-hold is recognized, the double-tap toggle should not fire.
        doubleTap.require(toFail: doubleTapHold)
        // Cancel double-tap if a pan larger than the pan gesture threshold happens prior to recognition:
        doubleTap.require(toFail: self.panGestureRecognizer)
        doubleTapHold.require(toFail: self.panGestureRecognizer)
        // Make singleTap wait for double gestures to avoid misfires.
        singleTap.require(toFail: doubleTap)
        singleTap.require(toFail: doubleTapHold)
        
        _zoomView!.addGestureRecognizer(doubleTapHold)
        _zoomView!.addGestureRecognizer(doubleTap)
        _zoomView!.addGestureRecognizer(singleTap)
        
        // keep strong refs to the recognizers so we can remove them if zoomView changes
        singleTapRecognizer = singleTap
        doubleTapRecognizer = doubleTap
        doubleTapHoldRecognizer = doubleTapHold
      }
    }
    
    @objc open weak var imageScrollViewDelegate: ImageScrollViewDelegate?

    var imageSize: CGSize = CGSize.zero
    private var pointToCenterAfterResize: CGPoint = CGPoint.zero
    private var scaleToRestoreAfterResize: CGFloat = 1.0
    open var maxScaleFromMinScale: CGFloat = 3.0
    
    override open var frame: CGRect {
        willSet {
            if frame.equalTo(newValue) == false && newValue.equalTo(CGRect.zero) == false && imageSize.equalTo(CGSize.zero) == false {
                prepareToResize()
            }
        }
        
        didSet {
            if frame.equalTo(oldValue) == false && frame.equalTo(CGRect.zero) == false && imageSize.equalTo(CGSize.zero) == false {
                recoverFromResizing()
            }
        }
    }
    
    override public init(frame: CGRect) {
        super.init(frame: frame)
        
        initialize()
    }
    
    required public init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        
        initialize()
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    
    private func initialize() {
        showsVerticalScrollIndicator = false
        showsHorizontalScrollIndicator = false
        bouncesZoom = true
        decelerationRate = UIScrollView.DecelerationRate.fast
        delegate = self
        
        NotificationCenter.default.addObserver(self, selector: #selector(ImageScrollView.changeOrientationNotification), name: UIDevice.orientationDidChangeNotification, object: nil)
    }
    
    @objc public func adjustFrameToCenter() {
        
        guard let unwrappedZoomView = _zoomView else {
            return
        }
        
        var frameToCenter = unwrappedZoomView.frame
        
        // center horizontally
        if frameToCenter.size.width < bounds.width {
            frameToCenter.origin.x = (bounds.width - frameToCenter.size.width) / 2
        }
        else {
            frameToCenter.origin.x = 0
        }
        
        // center vertically
        if frameToCenter.size.height < bounds.height {
            frameToCenter.origin.y = (bounds.height - frameToCenter.size.height) / 2
        }
        else {
            frameToCenter.origin.y = 0
        }
        
        unwrappedZoomView.frame = frameToCenter
    }
    
    private func prepareToResize() {
        let boundsCenter = CGPoint(x: bounds.midX, y: bounds.midY)
        pointToCenterAfterResize = convert(boundsCenter, to: _zoomView)
        
        scaleToRestoreAfterResize = zoomScale
        
        // If we're at the minimum zoom scale, preserve that by returning 0, which will be converted to the minimum
        // allowable scale when the scale is restored.
        if scaleToRestoreAfterResize <= minimumZoomScale + CGFloat(Float.ulpOfOne) {
            scaleToRestoreAfterResize = 0
        }
    }
    
    private func recoverFromResizing() {
        setMaxMinZoomScalesForCurrentBounds()
        
        // restore zoom scale, first making sure it is within the allowable range.
        let maxZoomScale = max(minimumZoomScale, scaleToRestoreAfterResize)
        zoomScale = min(maximumZoomScale, maxZoomScale)
        
        // restore center point, first making sure it is within the allowable range.
        
        // convert our desired center point back to our own coordinate space
        let boundsCenter = convert(pointToCenterAfterResize, to: _zoomView)
        
        // calculate the content offset that would yield that center point
        var offset = CGPoint(x: boundsCenter.x - bounds.size.width/2.0, y: boundsCenter.y - bounds.size.height/2.0)
        
        // restore offset, adjusted to be within the allowable range
        let maxOffset = maximumContentOffset()
        let minOffset = minimumContentOffset()
        
        var realMaxOffset = min(maxOffset.x, offset.x)
        offset.x = max(minOffset.x, realMaxOffset)
        
        realMaxOffset = min(maxOffset.y, offset.y)
        offset.y = max(minOffset.y, realMaxOffset)
        
        contentOffset = offset
    }
    
    private func maximumContentOffset() -> CGPoint {
        return CGPoint(x: contentSize.width - bounds.width,y:contentSize.height - bounds.height)
    }
    
    private func minimumContentOffset() -> CGPoint {
        return CGPoint.zero
    }

    
  @objc  func updateForImage(_ size: CGSize) {
        imageSize = size
        // contentSize = imageSize
//        setMaxMinZoomScalesForCurrentBounds()
//        zoomScale = minimumZoomScale
        
      switch initialOffset {
        case .begining:
            contentOffset =  CGPoint.zero
        case .center:
            let xOffset = imageSize.width < bounds.width ? 0 : (imageSize.width - bounds.width)/2
            let yOffset = imageSize.height < bounds.height ? 0 : (imageSize.height - bounds.height)/2

        switch _zoomView?.contentMode {
            case .scaleAspectFit:
                contentOffset =  CGPoint.zero
            case .scaleAspectFill:
                contentOffset = CGPoint(x: xOffset, y: yOffset)
            case .scaleToFill:
                contentOffset = CGPoint(x: xOffset, y: yOffset)
            default:
              contentOffset =  CGPoint.zero
            }
        }
    }
    
    private func setMaxMinZoomScalesForCurrentBounds() {
        // calculate min/max zoomscale
//        let xScale = bounds.width / imageSize.width    // the scale needed to perfectly fit the image width-wise
//        let yScale = bounds.height / imageSize.height   // the scale needed to perfectly fit the image height-wise
//    
//        var minScale: CGFloat = 1
//        
//        switch imageContentMode {
//        case .aspectFill:
//            minScale = max(xScale, yScale)
//        case .aspectFit:
//            minScale = min(xScale, yScale)
//        case .widthFill:
//            minScale = xScale
//        case .heightFill:
//            minScale = yScale
//        }
//        
//        
//        let maxScale = maxScaleFromMinScale*minScale
//        
//        // don't let minScale exceed maxScale. (If the image is smaller than the screen, we don't want to force it to be zoomed.)
//        if minScale > maxScale {
//            minScale = maxScale
//        }
        
//        maximumZoomScale = maxScale
//        minimumZoomScale = minScale * 0.999 // the multiply factor to prevent user cannot scroll page while they use this control in UIPageViewController
    }
    
    // MARK: - Gesture
    
    @objc func singleTapGestureRecognizer(_ gestureRecognizer: UITapGestureRecognizer) {
        guard let zoom = _zoomView else { return }
        let viewPoint = gestureRecognizer.location(in: zoom)
        let imagePoint = convertPointToImagePoint(viewPoint) ?? CGPoint.zero
        imageScrollViewDelegate?.imageScrollViewSingleTapped?(self, viewPoint: viewPoint, imagePoint: imagePoint)
    }

    // Double-tap-and-drag to zoom
    @objc func handleDoubleTapHold(_ recognizer: UILongPressGestureRecognizer) {
        guard let zoom = _zoomView else { return }
        let touchPointInZoom = recognizer.location(in: zoom)
        let touchPointInSelf = recognizer.location(in: self)

        switch recognizer.state {
        case .began:
            // Start interactive zoom; capture initial scale and anchor.
            isDoubleTapPanZooming = true
            doubleTapPanInitialScale = zoomScale
            doubleTapPanInitialCenter = touchPointInZoom
            doubleTapPanInitialTouchY = touchPointInSelf.y
            // temporarily disable the scroll view panning so that the gesture exclusively handles zooming
            self.isScrollEnabled = false
            imageScrollViewDelegate?.imageScrollViewDidStartDoubleTapPan?(self, viewPoint: touchPointInZoom, imagePoint: convertPointToImagePoint(touchPointInZoom) ?? CGPoint.zero)

        case .changed:
            guard isDoubleTapPanZooming else { return }
            let currentY = touchPointInSelf.y
            let deltaTotal = doubleTapPanInitialTouchY - currentY
            // Ramped exponential scale for comfortable control
            let rawNewScale = doubleTapPanInitialScale * CGFloat(expf(Float(deltaTotal * doubleTapPanSensitivity)))
            // clamp scale
            let newScale = min(max(rawNewScale, minimumZoomScale), maximumZoomScale)
            if abs(newScale - zoomScale) > 1e-4 {
                let zoomRect = zoomRectForScale(newScale, center: doubleTapPanInitialCenter)
                zoom(to: zoomRect, animated: false)
            }
        default:
            // Ended/cancelled/failed: restore normal scrolling and notify
            isDoubleTapPanZooming = false
            self.isScrollEnabled = true
            imageScrollViewDelegate?.imageScrollViewDidEndDoubleTapPan?(self)
        }
    }
    
    @objc func doubleTapGestureRecognizer(_ gestureRecognizer: UIGestureRecognizer) {
        // zoom out if it bigger than the scale factor after double-tap scaling. Else, zoom in
        if zoomScale >= minimumZoomScale * ImageScrollView.kZoomInFactorFromMinWhenDoubleTap - 0.01 {
            setZoomScale(minimumZoomScale, animated: true)
        } else {
            let center = gestureRecognizer.location(in: gestureRecognizer.view)
            let zoomRect = zoomRectForScale(ImageScrollView.kZoomInFactorFromMinWhenDoubleTap * minimumZoomScale, center: center)
            zoom(to: zoomRect, animated: true)
        }
    }
    
    private func zoomRectForScale(_ scale: CGFloat, center: CGPoint) -> CGRect {
        var zoomRect = CGRect.zero
        
        // the zoom rect is in the content view's coordinates.
        // at a zoom scale of 1.0, it would be the size of the imageScrollView's bounds.
        // as the zoom scale decreases, so more content is visible, the size of the rect grows.
        zoomRect.size.height = frame.size.height / scale
        zoomRect.size.width  = frame.size.width  / scale
        
        // choose an origin so as to get the right center.
        zoomRect.origin.x    = center.x - (zoomRect.size.width  / 2.0)
        zoomRect.origin.y    = center.y - (zoomRect.size.height / 2.0)
        
        return zoomRect
    }
    
    // MARK: - Actions
    
    @objc func changeOrientationNotification() {
        // A weird bug that frames are not update right after orientation changed. Need delay a little bit with async.
        DispatchQueue.main.async {
            self.updateForImage(self.imageSize)
            self.imageScrollViewDelegate?.imageScrollViewDidChangeOrientation(imageScrollView: self)
        }
    }
}

extension ImageScrollView: UIScrollViewDelegate {
    
    public func scrollViewDidScroll(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewDidScroll?(scrollView)
    }

    public func scrollViewWillBeginDragging(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewWillBeginDragging?(scrollView)
    }

    public func scrollViewWillEndDragging(_ scrollView: UIScrollView, withVelocity velocity: CGPoint, targetContentOffset: UnsafeMutablePointer<CGPoint>) {
        imageScrollViewDelegate?.scrollViewWillEndDragging?(scrollView, withVelocity: velocity, targetContentOffset: targetContentOffset)
    }
    
    public func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool) {
        imageScrollViewDelegate?.scrollViewDidEndDragging?(scrollView, willDecelerate: decelerate)
    }
    
    public func scrollViewWillBeginDecelerating(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewWillBeginDecelerating?(scrollView)
    }
    
    public func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewDidEndDecelerating?(scrollView)
    }
    
    public func scrollViewDidEndScrollingAnimation(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewDidEndScrollingAnimation?(scrollView)
    }
    
    public func scrollViewWillBeginZooming(_ scrollView: UIScrollView, with view: UIView?) {
        imageScrollViewDelegate?.scrollViewWillBeginZooming?(scrollView, with: view)
    }
    
    public func scrollViewDidEndZooming(_ scrollView: UIScrollView, with view: UIView?, atScale scale: CGFloat) {
        imageScrollViewDelegate?.scrollViewDidEndZooming?(scrollView, with: view, atScale: scale)
    }
    
    public func scrollViewShouldScrollToTop(_ scrollView: UIScrollView) -> Bool {
        return false
    }
    
    @available(iOS 11.0, *)
    public func scrollViewDidChangeAdjustedContentInset(_ scrollView: UIScrollView) {
        imageScrollViewDelegate?.scrollViewDidChangeAdjustedContentInset?(scrollView)
    }

    public func viewForZooming(in scrollView: UIScrollView) -> UIView? {
        return _zoomView
    }
    
    public func scrollViewDidZoom(_ scrollView: UIScrollView) {
        adjustFrameToCenter()
        imageScrollViewDelegate?.scrollViewDidZoom?(scrollView)
    }
    
}
