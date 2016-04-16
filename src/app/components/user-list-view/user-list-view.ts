import {Component, Input} from 'angular2/core';

@Component({
    selector: 'user-list-view',
    templateUrl: 'app/components/user-list-view/user-list-view.html',
    directives: []
})
export class UserListView {

    @Input()
    model:any[];

    constructor() {
        this.model = [];
    }
}
