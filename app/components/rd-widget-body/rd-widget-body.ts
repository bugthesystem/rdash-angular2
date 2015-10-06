import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'rd-widget-body',
  properties: ['loading', 'classes']
})
@View({
  templateUrl: './components/rd-widget-body/rd-widget-body.html',
  directives: [CORE_DIRECTIVES]
})
export class RdWidgetBody {
  loading:boolean;
  classes:string;

  constructor() {
    this.loading = false;
    this.classes = '';
  }
}
