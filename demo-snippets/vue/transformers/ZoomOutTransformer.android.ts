const MIN_SCALE = 0.85;
const MIN_ALPHA = 0.5;

@NativeClass
@Interfaces([androidx.viewpager2.widget.ViewPager2.PageTransformer])
export default class ZoomOutTransformer extends java.lang.Object {
    constructor() {
        super();
        return global.__native(this);
    }

    public transformPage(page: android.view.View, position: number) {
        const pageWidth = page.getWidth();
        const pageHeight = page.getHeight();

        if (position < -1 || position > 1) {
            page.setAlpha(0);
            return;
        }
        // shrink and fade the page while it leaves/enters
        const scaleFactor = Math.max(MIN_SCALE, 1 - Math.abs(position));
        const vertMargin = (pageHeight * (1 - scaleFactor)) / 2;
        const horzMargin = (pageWidth * (1 - scaleFactor)) / 2;
        page.setTranslationX(position < 0 ? horzMargin - vertMargin / 2 : -horzMargin + vertMargin / 2);
        page.setScaleX(scaleFactor);
        page.setScaleY(scaleFactor);
        page.setAlpha(MIN_ALPHA + ((scaleFactor - MIN_SCALE) / (1 - MIN_SCALE)) * (1 - MIN_ALPHA));
    }
}
