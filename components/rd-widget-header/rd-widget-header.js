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
var RdWidgetHeader = (function () {
    function RdWidgetHeader() {
        this.title = '';
        this.icon = '';
    }
    RdWidgetHeader = __decorate([
        angular2_1.Component({
            selector: 'rd-widget-header',
            properties: ['title', 'icon']
        }),
        angular2_1.View({
            template: "\n    <div class=\"widget-header\">\n      <div class=\"row\">\n        <div class=\"pull-left\"><i class=\"fa {{icon}}\"></i> {{title}}</div>\n        <div class=\"pull-right col-xs-6 col-sm-4\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidgetHeader);
    return RdWidgetHeader;
})();
exports.RdWidgetHeader = RdWidgetHeader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmQtd2lkZ2V0LWhlYWRlci9yZC13aWRnZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbIlJkV2lkZ2V0SGVhZGVyIiwiUmRXaWRnZXRIZWFkZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUFxQkVBO1FBQ0VDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUF4QkhEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxrQkFBa0JBO1lBQzVCQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEseVJBU1RBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7O3VCQVNEQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7QUFSWSxzQkFBYyxpQkFRMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZC13aWRnZXQtaGVhZGVyJyxcbiAgcHJvcGVydGllczogWyd0aXRsZScsICdpY29uJ11cbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIndpZGdldC1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPjxpIGNsYXNzPVwiZmEge3tpY29ufX1cIj48L2k+IHt7dGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBjb2wteHMtNiBjb2wtc20tNFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgUmRXaWRnZXRIZWFkZXIge1xuICB0aXRsZTpzdHJpbmc7XG4gIGljb246c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB0aGlzLmljb24gPSAnJztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9