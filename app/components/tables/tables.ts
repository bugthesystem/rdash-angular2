import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {RdLoading} from 'components/rd-loading/rd-loading';
import {RdWidget} from 'components/rd-widget/rd-widget';

import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from 'components/rd-widget-footer/rd-widget-footer';

import {ServerListView} from 'components/server-list-view/server-list-view';
import {ServerListService} from 'services/server_list';


@Component({
  selector: 'tables',
  appInjector: [ServerListService]
})
@View({
  templateUrl: './components/tables/tables.html',
  directives: [CORE_DIRECTIVES, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading,ServerListView]
})
export class Tables {
  servers:any[];
  serverListService:ServerListService;

  constructor() {
    this.serverListService = new ServerListService();/*TODO: Inject*/
    this.servers = this.serverListService.all();
  }
}
