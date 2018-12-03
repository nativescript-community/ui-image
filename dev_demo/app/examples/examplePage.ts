import { NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { Frame } from 'tns-core-modules/ui/frame/frame';
import { DataItem } from '../home/dataItem';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import * as http from 'tns-core-modules/http';
import { isAndroid, isIOS } from 'tns-core-modules/platform';

const builder = require('ui/builder');

export interface MovieItem {
    id?: number;
    video?: boolean;
    vote_average?: number;
    title?: string;
    popularity?: number;
    poster_path?: string;
    original_language?: string;
    original_title?: string;
    genre_ids?: number[];
    backdrop_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    trailerItems?: ObservableArray<MovieItem>;
}

class Model {
    private _dataItems: ObservableArray<DataItem>;
    private _movieItems: ObservableArray<MovieItem>;
    public loading = false;
    public currentPage = 1;
    constructor(public title) {}

    public get dataItems() {
        if (!this._dataItems) {
            this.initDataItems();
        }
        return this._dataItems;
    }

    private initDataItems() {
        if (!this._dataItems) {
            this._dataItems = new ObservableArray<DataItem>();

            for (let i = 1; i <= 50; i++) {
                let imageUrl = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/dessert1.jpg';
                if (i % 3 === 1) {
                    imageUrl = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink1.jpg';
                } else if (i % 3 === 0) {
                    imageUrl = 'https://raw.githubusercontent.com/Akylas/nativescript-image/master/examples-data/drink2.jpg';
                }

                this._dataItems.push(new DataItem(i, imageUrl));
            }
        }
    }
    public onLoadMoreItemsRequested(data: any) {
        console.log('onLoadMoreItemsRequested');
        this.currentPage += 1;
        data.object.notifyLoadOnDemandFinished();
        // }, 1000);
        data.returnValue = isAndroid;
        this.loadMovies();
    }
    private loadMovies() {
        return http
            .getJSON(
                `https://api.themoviedb.org/3/discover/movie?api_key=2d06dfd032252c2f28640c29b6f0b067&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${
                    this.currentPage
                }`
            )
            .then(
                (r: any) => {
                    r.results.forEach((result: MovieItem) => {
                        result.backdrop_path = 'https://image.tmdb.org/t/p/w500/' + result.backdrop_path;
                        result.poster_path = 'https://image.tmdb.org/t/p/w500/' + result.poster_path;
                        // console.log('adding item', JSON.stringify(result));
                        this._movieItems.push(result);
                    });
                    this.title = this._movieItems.length + ' Movies';
                },
                function(e) {
                    //// Argument (e) is Error!
                    console.log(e);
                    this.loader.hide();
                }
            );
    }

    public get movieItems() {
        if (!this._movieItems) {
            this._movieItems = new ObservableArray<MovieItem>();
            this.loadMovies();
        }
        return this._movieItems;
    }
}

export function onNavigatingTo(args) {
    const page = args.object;
    const context = page.navigationContext;

    page.bindingContext = new Model(context.example);

    const container = page.getViewById('container');
    const component = builder.load({
        path: 'examples',
        name: context.example
    });

    container.addChild(component);
}

export function onBack(args) {
    const navigationButton = args.object as NavigationButton;
    const frame = navigationButton.page.frame as Frame;
    frame.goBack();
}
