import {Component} from 'angular2/core';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';


@Component({
    selector: 'tables',
    providers: [ServerListService],
    templateUrl: 'app/components/tables/tables.html',
    directives: [RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView]
})
export class Tables {
    servers:any[];
    serverListService:ServerListService;

    constructor(private serverListService:ServerListService) {
    }
    
    ngOnInit() {
        this.servers = this.serverListService.all();
    }
}
