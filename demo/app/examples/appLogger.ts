import { Image } from "nativescript-image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";

export function  writeToOutputLabel(drawee: Image, message: string) {
    let gridLayout = drawee.parent as GridLayout;
    let label = gridLayout.getViewById("outputLabel") as Label;
    console.log(message);
    label.text += "\n" + message;
}