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
var RdWidget = (function () {
    function RdWidget() {
    }
    RdWidget = __decorate([
        angular2_1.Component({
            selector: 'rd-widget'
        }),
        angular2_1.View({
            template: "\n    <div class=\"widget\">\n      <ng-content></ng-content>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidget);
    return RdWidget;
})();
exports.RdWidget = RdWidget;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmQtd2lkZ2V0L3JkLXdpZGdldC50cyJdLCJuYW1lcyI6WyJSZFdpZGdldCIsIlJkV2lkZ2V0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRW5FO0lBQUFBO0lBWUFDLENBQUNBO0lBWkREO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxXQUFXQTtTQUN0QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsK0VBSVRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7O2lCQUVEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQVpBLEFBWUNBLElBQUE7QUFEWSxnQkFBUSxXQUNwQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmQtd2lkZ2V0L3JkLXdpZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmQtd2lkZ2V0J1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFJkV2lkZ2V0IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==