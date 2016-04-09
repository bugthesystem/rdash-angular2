import {Component} from 'angular2/core';

@Component({
  selector: 'rd-widget-header',
  properties: ['title', 'icon'],
  templateUrl: './components/rd-widget-header/rd-widget-header.html'
})
export class RdWidgetHeader {
  title:string;
  icon:string;

  constructor() {
    this.title = '';
    this.icon = '';
  }
}
