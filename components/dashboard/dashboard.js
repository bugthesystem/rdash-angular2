var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var alerts_1 = require('components/alerts/alerts');
var rd_loading_1 = require('components/rd-loading/rd-loading');
var rd_widget_1 = require('components/rd-widget/rd-widget');
var rd_widget_header_1 = require('components/rd-widget-header/rd-widget-header');
var rd_widget_body_1 = require('components/rd-widget-body/rd-widget-body');
var rd_widget_footer_1 = require('components/rd-widget-footer/rd-widget-footer');
var server_list_view_1 = require('components/server-list-view/server-list-view');
var server_list_1 = require('services/server_list');
var user_list_view_1 = require('components/user-list-view/user-list-view');
var user_list_1 = require('services/user_list');
var Dashboard = (function () {
    function Dashboard() {
        this.serverListService = new server_list_1.ServerListService();
        this.servers = this.serverListService.all();
        this.userListService = new user_list_1.UserListService();
        this.users = this.userListService.all();
    }
    Dashboard = __decorate([
        angular2_1.Component({
            selector: 'dashboard',
            appInjector: [server_list_1.ServerListService]
        }),
        angular2_1.View({
            template: "\n    <alerts></alerts>\n\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-xs-12\">\n        <rd-widget>\n          <rd-widget-body>\n            <div class=\"widget-icon green pull-left\">\n              <i class=\"fa fa-users\"></i>\n            </div>\n            <div class=\"title\">80</div>\n            <div class=\"comment\">Users</div>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-xs-12\">\n        <rd-widget>\n          <rd-widget-body>\n            <div class=\"widget-icon red pull-left\">\n              <i class=\"fa fa-tasks\"></i>\n            </div>\n            <div class=\"title\">16</div>\n            <div class=\"comment\">Servers</div>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-xs-12\">\n        <rd-widget>\n          <rd-widget-body>\n            <div class=\"widget-icon orange pull-left\">\n              <i class=\"fa fa-sitemap\"></i>\n            </div>\n            <div class=\"title\">225</div>\n            <div class=\"comment\">Documents</div>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-xs-12\">\n        <rd-widget>\n          <rd-widget-body>\n            <div class=\"widget-icon blue pull-left\">\n              <i class=\"fa fa-support\"></i>\n            </div>\n            <div class=\"title\">62</div>\n            <div class=\"comment\">Tickets</div>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <rd-widget>\n          <rd-widget-header icon=\"fa-tasks\" title=\"Servers\">\n            <a href=\"javascript:void(0)\" style=\"float: right\">Manage</a>\n          </rd-widget-header>\n          <rd-widget-body classes=\"medium no-padding\">\n            <server-list-view [model]=\"servers\"></server-list-view>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n      <div class=\"col-lg-6\">\n        <rd-widget>\n          <rd-widget-header icon=\"fa-users\" title=\"Users\">\n            <input type=\"text\" placeholder=\"Search\" class=\"form-control input-sm\"/>\n          </rd-widget-header>\n          <rd-widget-body classes=\"medium no-padding\">\n            <user-list-view [model]=\"users\"></user-list-view>\n          </rd-widget-body>\n          <rd-widget>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <rd-widget>\n          <rd-widget-header icon=\"fa-plus\" title=\"Extras\">\n            <button class=\"btn btn-sm btn-info\" style=\"float: right\">Button</button>\n          </rd-widget-header>\n          <rd-widget-body>\n            <div class=\"message\">\n              This is a standard message which will also work the \".no-padding\" class, I can also <span class=\"error\">be an error message!</span>\n            </div>\n            <hr/>\n            <div class=\"message\">\n              <a href=\"http://angular-ui.github.io/bootstrap/\" target=\"_blank\">UI Bootstrap</a> is included, so you can use\n              <a href=\"#\" tooltip=\"I'm a tooltip!\">tooltips</a> and all of the other native Bootstrap JS components!\n            </div>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n      <div class=\"col-lg-6\">\n        <rd-widget>\n          <rd-widget-header icon=\"fa-cog fa-spin\" title=\"Loading Directive\">\n            <a href=\"http://tobiasahlin.com/spinkit/\" style=\"float: right\" target=\"_blank\">SpinKit</a>\n          </rd-widget-header>\n          <rd-widget-body>\n            <rd-loading></rd-loading>\n          </rd-widget-body>\n        </rd-widget>\n      </div>\n    </div>\n  ",
            styles: ["\n\n  "],
            directives: [alerts_1.Alerts, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView, user_list_view_1.UserListView]
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard);
    return Dashboard;
})();
exports.Dashboard = Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJEYXNoYm9hcmQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQsdUJBQXFCLDBCQUEwQixDQUFDLENBQUE7QUFHaEQsMkJBQXdCLGtDQUFrQyxDQUFDLENBQUE7QUFDM0QsMEJBQXVCLGdDQUFnQyxDQUFDLENBQUE7QUFFeEQsaUNBQTZCLDhDQUE4QyxDQUFDLENBQUE7QUFDNUUsK0JBQTJCLDBDQUEwQyxDQUFDLENBQUE7QUFDdEUsaUNBQTZCLDhDQUE4QyxDQUFDLENBQUE7QUFFNUUsaUNBQTZCLDhDQUE4QyxDQUFDLENBQUE7QUFDNUUsNEJBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFFdkQsK0JBQTJCLDBDQUEwQyxDQUFDLENBQUE7QUFDdEUsMEJBQThCLG9CQUFvQixDQUFDLENBQUE7QUFHbkQ7SUF5SEVBO1FBQ0VDLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsSUFBSUEsK0JBQWlCQSxFQUFFQSxDQUFDQTtRQUVqREEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUU1Q0EsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsMkJBQWVBLEVBQUVBLENBQUNBO1FBRTdDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFqSUhEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsV0FBV0EsRUFBRUEsQ0FBQ0EsK0JBQWlCQSxDQUFDQTtTQUNqQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsaXRIQXNHVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsUUFFUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsZUFBTUEsRUFBRUEsb0JBQVFBLEVBQUVBLGlDQUFjQSxFQUFFQSw2QkFBWUEsRUFBRUEsaUNBQWNBLEVBQUVBLHNCQUFTQSxFQUFFQSxpQ0FBY0EsRUFBRUEsNkJBQVlBLENBQUNBO1NBQ3RIQSxDQUFDQTs7a0JBa0JEQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0FsSUEsQUFrSUNBLElBQUE7QUFqQlksaUJBQVMsWUFpQnJCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtBbGVydHN9IGZyb20gJ2NvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cyc7XG5cblxuaW1wb3J0IHtSZExvYWRpbmd9IGZyb20gJ2NvbXBvbmVudHMvcmQtbG9hZGluZy9yZC1sb2FkaW5nJztcbmltcG9ydCB7UmRXaWRnZXR9IGZyb20gJ2NvbXBvbmVudHMvcmQtd2lkZ2V0L3JkLXdpZGdldCc7XG5cbmltcG9ydCB7UmRXaWRnZXRIZWFkZXJ9IGZyb20gJ2NvbXBvbmVudHMvcmQtd2lkZ2V0LWhlYWRlci9yZC13aWRnZXQtaGVhZGVyJztcbmltcG9ydCB7UmRXaWRnZXRCb2R5fSBmcm9tICdjb21wb25lbnRzL3JkLXdpZGdldC1ib2R5L3JkLXdpZGdldC1ib2R5JztcbmltcG9ydCB7UmRXaWRnZXRGb290ZXJ9IGZyb20gJ2NvbXBvbmVudHMvcmQtd2lkZ2V0LWZvb3Rlci9yZC13aWRnZXQtZm9vdGVyJztcblxuaW1wb3J0IHtTZXJ2ZXJMaXN0Vmlld30gZnJvbSAnY29tcG9uZW50cy9zZXJ2ZXItbGlzdC12aWV3L3NlcnZlci1saXN0LXZpZXcnO1xuaW1wb3J0IHtTZXJ2ZXJMaXN0U2VydmljZX0gZnJvbSAnc2VydmljZXMvc2VydmVyX2xpc3QnO1xuXG5pbXBvcnQge1VzZXJMaXN0Vmlld30gZnJvbSAnY29tcG9uZW50cy91c2VyLWxpc3Qtdmlldy91c2VyLWxpc3Qtdmlldyc7XG5pbXBvcnQge1VzZXJMaXN0U2VydmljZX0gZnJvbSAnc2VydmljZXMvdXNlcl9saXN0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxuICBhcHBJbmplY3RvcjogW1NlcnZlckxpc3RTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8YWxlcnRzPjwvYWxlcnRzPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMlwiPlxuICAgICAgICA8cmQtd2lkZ2V0PlxuICAgICAgICAgIDxyZC13aWRnZXQtYm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtaWNvbiBncmVlbiBwdWxsLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2Vyc1wiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+ODA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+VXNlcnM8L2Rpdj5cbiAgICAgICAgICA8L3JkLXdpZGdldC1ib2R5PlxuICAgICAgICA8L3JkLXdpZGdldD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMlwiPlxuICAgICAgICA8cmQtd2lkZ2V0PlxuICAgICAgICAgIDxyZC13aWRnZXQtYm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtaWNvbiByZWQgcHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGFza3NcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPjE2PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlNlcnZlcnM8L2Rpdj5cbiAgICAgICAgICA8L3JkLXdpZGdldC1ib2R5PlxuICAgICAgICA8L3JkLXdpZGdldD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMlwiPlxuICAgICAgICA8cmQtd2lkZ2V0PlxuICAgICAgICAgIDxyZC13aWRnZXQtYm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtaWNvbiBvcmFuZ2UgcHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2l0ZW1hcFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+MjI1PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPkRvY3VtZW50czwvZGl2PlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgIDwvcmQtd2lkZ2V0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyXCI+XG4gICAgICAgIDxyZC13aWRnZXQ+XG4gICAgICAgICAgPHJkLXdpZGdldC1ib2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1pY29uIGJsdWUgcHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3VwcG9ydFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+NjI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+VGlja2V0czwvZGl2PlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgIDwvcmQtd2lkZ2V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgPHJkLXdpZGdldD5cbiAgICAgICAgICA8cmQtd2lkZ2V0LWhlYWRlciBpY29uPVwiZmEtdGFza3NcIiB0aXRsZT1cIlNlcnZlcnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBzdHlsZT1cImZsb2F0OiByaWdodFwiPk1hbmFnZTwvYT5cbiAgICAgICAgICA8L3JkLXdpZGdldC1oZWFkZXI+XG4gICAgICAgICAgPHJkLXdpZGdldC1ib2R5IGNsYXNzZXM9XCJtZWRpdW0gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgPHNlcnZlci1saXN0LXZpZXcgW21vZGVsXT1cInNlcnZlcnNcIj48L3NlcnZlci1saXN0LXZpZXc+XG4gICAgICAgICAgPC9yZC13aWRnZXQtYm9keT5cbiAgICAgICAgPC9yZC13aWRnZXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgICAgICA8cmQtd2lkZ2V0PlxuICAgICAgICAgIDxyZC13aWRnZXQtaGVhZGVyIGljb249XCJmYS11c2Vyc1wiIHRpdGxlPVwiVXNlcnNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIi8+XG4gICAgICAgICAgPC9yZC13aWRnZXQtaGVhZGVyPlxuICAgICAgICAgIDxyZC13aWRnZXQtYm9keSBjbGFzc2VzPVwibWVkaXVtIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDx1c2VyLWxpc3QtdmlldyBbbW9kZWxdPVwidXNlcnNcIj48L3VzZXItbGlzdC12aWV3PlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgICAgPHJkLXdpZGdldD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XG4gICAgICAgIDxyZC13aWRnZXQ+XG4gICAgICAgICAgPHJkLXdpZGdldC1oZWFkZXIgaWNvbj1cImZhLXBsdXNcIiB0aXRsZT1cIkV4dHJhc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIiBzdHlsZT1cImZsb2F0OiByaWdodFwiPkJ1dHRvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWhlYWRlcj5cbiAgICAgICAgICA8cmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICBUaGlzIGlzIGEgc3RhbmRhcmQgbWVzc2FnZSB3aGljaCB3aWxsIGFsc28gd29yayB0aGUgXCIubm8tcGFkZGluZ1wiIGNsYXNzLCBJIGNhbiBhbHNvIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj5iZSBhbiBlcnJvciBtZXNzYWdlITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwL1wiIHRhcmdldD1cIl9ibGFua1wiPlVJIEJvb3RzdHJhcDwvYT4gaXMgaW5jbHVkZWQsIHNvIHlvdSBjYW4gdXNlXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdG9vbHRpcD1cIkknbSBhIHRvb2x0aXAhXCI+dG9vbHRpcHM8L2E+IGFuZCBhbGwgb2YgdGhlIG90aGVyIG5hdGl2ZSBCb290c3RyYXAgSlMgY29tcG9uZW50cyFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgIDwvcmQtd2lkZ2V0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgPHJkLXdpZGdldD5cbiAgICAgICAgICA8cmQtd2lkZ2V0LWhlYWRlciBpY29uPVwiZmEtY29nIGZhLXNwaW5cIiB0aXRsZT1cIkxvYWRpbmcgRGlyZWN0aXZlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0L1wiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3BpbktpdDwvYT5cbiAgICAgICAgICA8L3JkLXdpZGdldC1oZWFkZXI+XG4gICAgICAgICAgPHJkLXdpZGdldC1ib2R5PlxuICAgICAgICAgICAgPHJkLWxvYWRpbmc+PC9yZC1sb2FkaW5nPlxuICAgICAgICAgIDwvcmQtd2lkZ2V0LWJvZHk+XG4gICAgICAgIDwvcmQtd2lkZ2V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcblxuICBgXSxcbiAgZGlyZWN0aXZlczogW0FsZXJ0cywgUmRXaWRnZXQsIFJkV2lkZ2V0SGVhZGVyLCBSZFdpZGdldEJvZHksIFJkV2lkZ2V0Rm9vdGVyLCBSZExvYWRpbmcsIFNlcnZlckxpc3RWaWV3LCBVc2VyTGlzdFZpZXddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCB7XG5cbiAgc2VydmVyczphbnlbXTtcbiAgdXNlcnM6YW55W107XG5cbiAgc2VydmVyTGlzdFNlcnZpY2U6U2VydmVyTGlzdFNlcnZpY2U7XG4gIHVzZXJMaXN0U2VydmljZTpVc2VyTGlzdFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXJ2ZXJMaXN0U2VydmljZSA9IG5ldyBTZXJ2ZXJMaXN0U2VydmljZSgpO1xuICAgIC8qVE9ETzogSW5qZWN0Ki9cbiAgICB0aGlzLnNlcnZlcnMgPSB0aGlzLnNlcnZlckxpc3RTZXJ2aWNlLmFsbCgpO1xuXG4gICAgdGhpcy51c2VyTGlzdFNlcnZpY2UgPSBuZXcgVXNlckxpc3RTZXJ2aWNlKCk7XG4gICAgLypUT0RPOiBJbmplY3QqL1xuICAgIHRoaXMudXNlcnMgPSB0aGlzLnVzZXJMaXN0U2VydmljZS5hbGwoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9