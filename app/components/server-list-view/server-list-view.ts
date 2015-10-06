import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'server-list-view',
  properties: ['model']
})
@View({
  templateUrl: './components/server-list-view/server-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class ServerListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
