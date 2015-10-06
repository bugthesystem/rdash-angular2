import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'rd-widget-header',
  properties: ['title', 'icon']
})
@View({
  templateUrl: './components/rd-widget-header/rd-widget-header.html',
  directives: [CORE_DIRECTIVES]
})
export class RdWidgetHeader {
  title:string;
  icon:string;

  constructor() {
    this.title = '';
    this.icon = '';
  }
}
