import {Component} from 'angular2/core';

@Component({
    selector: 'server-list-view',
    properties: ['model'],
    templateUrl: 'app/components/server-list-view/server-list-view.html'
})
export class ServerListView {

    model:any[];

    constructor() {
        this.model = [];
    }
}
