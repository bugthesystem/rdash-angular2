// import 'core-js';
// import 'zone.js';
System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/common', 'angular2/router', './components/dashboard/dashboard', './components/tables/tables', './services/user_list', './services/server_list'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, common_1, router_1, dashboard_1, tables_1, user_list_1, server_list_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (tables_1_1) {
                tables_1 = tables_1_1;
            },
            function (user_list_1_1) {
                user_list_1 = user_list_1_1;
            },
            function (server_list_1_1) {
                server_list_1 = server_list_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                }
                Main.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this.toggle = true;
                            }
                        }
                        else {
                            _this.toggle = false;
                        }
                    };
                };
                Main.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                Main.prototype.toggleSidebar = function () {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                };
                Main = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: dashboard_1.Dashboard, name: 'Dashboard' },
                        { path: '/tables', component: tables_1.Tables, name: 'Tables' }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/main.html',
                        styleUrls: ['app/main.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            browser_1.bootstrap(Main, [router_1.ROUTER_PROVIDERS, common_1.FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, user_list_1.UserListService, server_list_1.ServerListService,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
        }
    }
});
//# sourceMappingURL=main.js.map