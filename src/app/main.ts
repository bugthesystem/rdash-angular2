import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';

import {UserListService} from './services/user_list';
import {ServerListService} from './services/server_list';

@RouteConfig([
    {path: '/', component: Dashboard, name: 'Dashboard'},
    {path: '/tables', component: Tables, name: 'Tables'}
])
@Component({
    selector: 'app',
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES]
})
class Main {

    mobileView:number = 992;
    toggle:boolean = false;

    constructor() {
        this.attachEvents();
    }

    attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }
}

bootstrap(Main, [ROUTER_PROVIDERS, FORM_PROVIDERS,
    ROUTER_PROVIDERS, HTTP_PROVIDERS, UserListService, ServerListService,
    bind(LocationStrategy).toClass(HashLocationStrategy)]);
