declare class ImageScrollView extends UIScrollView {
    static new(): ImageScrollView
    zoomView: UIImageView | SDAnimatedImageView
    currentTransform: CGAffineTransform
    getImageDisplayRect(): CGRect
    updateContentInsetsForImage(): void

    updateForImage(size: CGSize)
}