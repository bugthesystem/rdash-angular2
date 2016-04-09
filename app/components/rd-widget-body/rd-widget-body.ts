import {Component} from 'angular2/core';
@Component({
  selector: 'rd-widget-body',
  properties: ['loading', 'classes'],
  templateUrl: './components/rd-widget-body/rd-widget-body.html'
})
export class RdWidgetBody {
  loading:boolean;
  classes:string;

  constructor() {
    this.loading = false;
    this.classes = '';
  }
}
