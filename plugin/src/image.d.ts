import { PercentLength, View } from "ui/core/view";

export class Image extends View {
    public decodeWidth: PercentLength;
    public decodeHeight: PercentLength;

    public ios: any; /* UIImageView */
    public android: any; /* android.widget.ImageView */
}

