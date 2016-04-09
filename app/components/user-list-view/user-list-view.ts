import {Component} from 'angular2/core';

@Component({
  selector: 'user-list-view',
  properties: ['model'],
  templateUrl: './components/user-list-view/user-list-view.html',
  directives: []
})
export class UserListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
