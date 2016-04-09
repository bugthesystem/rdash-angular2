import 'core-js';
import 'zone.js';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';

@RouteConfig([
  {path: '/', component: Dashboard, as: 'dashboard'},
  {path: '/tables', component: Tables, as: 'tables'}
])
@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
class App {

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

bootstrap(App);
