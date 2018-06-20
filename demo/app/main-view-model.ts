import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable, EventData } from "data/observable";
import * as http from "http";
import { isAndroid, isIOS } from "platform";
import { clearCache } from "nativescript-image";

export interface MovieItem {
    id?: number
    video?: boolean
    vote_average?: number
    title?: string
    popularity?: number
    poster_path?: string
    original_language?: string
    original_title?: string
    genre_ids?: number[]
    backdrop_path?: string
    adult?: boolean
    overview?: string
    release_date?: string
    trailerItems?: ObservableArray<MovieItem>
}

export class MainViewModel extends Observable {
    currentPage = 1
    constructor() {
        super();
        this.dataItems = new ObservableArray<MovieItem>();
        clearCache();
        // this.trailerItems = new ObservableArray<MovieItem>();
        // this.dataItems.push({trailerItems:this.trailerItems}) //trailers
    }
    refresh() {
        return http.getJSON(`https://api.themoviedb.org/3/discover/movie?api_key=2d06dfd032252c2f28640c29b6f0b067&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${this.currentPage}`).then((r: any) => {
            r.results.forEach((result: MovieItem) => {
                result.backdrop_path = 'https://image.tmdb.org/t/p/w500/' + result.backdrop_path;
                result.poster_path = 'https://image.tmdb.org/t/p/w500/' + result.poster_path;
                // console.log('adding item', JSON.stringify(result));
                this.dataItems.push(result);
            });
            console.log('got result', this.currentPage, r.results.length);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
            this.loader.hide();
        });
    }
    get dataItems(): ObservableArray<MovieItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<MovieItem>) {
        this.set("_dataItems", value);
    }

    public onLoadMoreItemsRequested(data: any) {
      console.log('onLoadMoreItemsRequested');
        this.currentPage += 1;
        data.object.notifyLoadOnDemandFinished();
        // }, 1000);
        data.returnValue = isAndroid;
        this.refresh();
    }
}
