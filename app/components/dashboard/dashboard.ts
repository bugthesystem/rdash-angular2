import {Component, View} from 'angular2/angular2';

import {Alerts} from 'components/alerts/alerts';


import {RdLoading} from 'components/rd-loading/rd-loading';
import {RdWidget} from 'components/rd-widget/rd-widget';

import {RdWidgetHeader} from 'components/rd-widget-header/rd-widget-header';
import {RdWidgetBody} from 'components/rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from 'components/rd-widget-footer/rd-widget-footer';

import {ServerListView} from 'components/server-list-view/server-list-view';
import {ServerListService} from 'services/server_list';

import {UserListView} from 'components/user-list-view/user-list-view';
import {UserListService} from 'services/user_list';


@Component({
  selector: 'dashboard',
  appInjector: [ServerListService]
})
@View({
  templateUrl: './components/dashboard/dashboard.html',
  styleUrls: ['./components/dashboard/dashboard.css'],
  directives: [Alerts, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView, UserListView]
})
export class Dashboard {

  servers:any[];
  users:any[];

  serverListService:ServerListService;
  userListService:UserListService;

  constructor() {
    this.serverListService = new ServerListService();
    /*TODO: Inject*/
    this.servers = this.serverListService.all();

    this.userListService = new UserListService();
    /*TODO: Inject*/
    this.users = this.userListService.all();
  }
}
