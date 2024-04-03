declare class ImageScrollView extends UIScrollView {
    static new(): ImageScrollView
    zoomView: UIImageView | SDAnimatedImageView

    updateForImage(size: CGSize)
}