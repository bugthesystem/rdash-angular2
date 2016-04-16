System.register(['angular2/core', '../alerts/alerts', '../rd-loading/rd-loading', '../rd-widget/rd-widget', '../rd-widget-header/rd-widget-header', '../rd-widget-body/rd-widget-body', '../rd-widget-footer/rd-widget-footer', '../server-list-view/server-list-view', '../../services/server_list', '../user-list-view/user-list-view', '../../services/user_list'], function(exports_1, context_1) {
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
    var core_1, alerts_1, rd_loading_1, rd_widget_1, rd_widget_header_1, rd_widget_body_1, rd_widget_footer_1, server_list_view_1, server_list_1, user_list_view_1, user_list_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alerts_1_1) {
                alerts_1 = alerts_1_1;
            },
            function (rd_loading_1_1) {
                rd_loading_1 = rd_loading_1_1;
            },
            function (rd_widget_1_1) {
                rd_widget_1 = rd_widget_1_1;
            },
            function (rd_widget_header_1_1) {
                rd_widget_header_1 = rd_widget_header_1_1;
            },
            function (rd_widget_body_1_1) {
                rd_widget_body_1 = rd_widget_body_1_1;
            },
            function (rd_widget_footer_1_1) {
                rd_widget_footer_1 = rd_widget_footer_1_1;
            },
            function (server_list_view_1_1) {
                server_list_view_1 = server_list_view_1_1;
            },
            function (server_list_1_1) {
                server_list_1 = server_list_1_1;
            },
            function (user_list_view_1_1) {
                user_list_view_1 = user_list_view_1_1;
            },
            function (user_list_1_1) {
                user_list_1 = user_list_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(serverListService, userListService) {
                    this.serverListService = serverListService;
                    this.userListService = userListService;
                    this.serverListService = serverListService;
                    this.userListService = userListService;
                }
                Dashboard.prototype.ngOnInit = function () {
                    this.servers = this.serverListService.all();
                    this.users = this.userListService.all();
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [server_list_1.ServerListService],
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        styleUrls: ['app/components/dashboard/dashboard.css'],
                        directives: [alerts_1.Alerts, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody,
                            rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView, user_list_view_1.UserListView]
                    }), 
                    __metadata('design:paramtypes', [server_list_1.ServerListService, user_list_1.UserListService])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map