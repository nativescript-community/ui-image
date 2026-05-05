declare class ImageScrollView extends UIScrollView {
    static new(): ImageScrollView
    zoomView: UIImageView | SDAnimatedImageView
    currentTransform: CGAffineTransform

    updateForImage(size: CGSize)
}