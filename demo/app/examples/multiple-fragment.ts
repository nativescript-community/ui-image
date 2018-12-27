import { ListViewEventData, RadListView } from 'nativescript-ui-listview';
import { FinalEventData } from 'nativescript-image';
import { View } from 'tns-core-modules/ui/page/page';

export function onFinalImageSet(args: FinalEventData) {
    const listView = (args.object as View).page.getViewById('listView') as RadListView;
    if (listView && listView.listViewLayout && listView.listViewLayout.ios) {
        listView.listViewLayout.ios.invalidateLayout();
    }
}

