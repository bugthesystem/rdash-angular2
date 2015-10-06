import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'rd-widget'
})
@View({
  templateUrl: './components/rd-widget/rd-widget.html',
  directives: [CORE_DIRECTIVES]
})
export class RdWidget {
}
