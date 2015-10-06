import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'user-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/user-list-view/user-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class UserListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
