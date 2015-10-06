import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'alerts'
})
@View({
  templateUrl: './components/alerts/alerts.html',
  directives: [CORE_DIRECTIVES]
})
export class Alerts {

  alerts:any[] = [{
    type: 'success',
    msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
  }, {
    type: 'danger',
    msg: 'Found a bug? Create an issue with as many details as you can.'
  }];

  addAlert() {
    this.alerts.push({
      msg: 'Another alert!'
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
