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
var ServerListView = (function () {
    function ServerListView() {
        this.model = [];
    }
    ServerListView = __decorate([
        angular2_1.Component({
            selector: 'server-list-view',
            properties: ['model']
        }),
        angular2_1.View({
            template: "\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <tbody>\n\n        <tr *ng-for=\"#server of model\">\n          <td>{{server.name}}</td>\n          <td>{{server.ip}}</td>\n          <td>\n                    <span class=\"{{server.tooltipcls}}\"><i\n                      class=\"fa {{server.icon}}\"></i></span></td>\n          <!--tooltip=\"{{serverItem.tooltip}}\"-->\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ServerListView);
    return ServerListView;
})();
exports.ServerListView = ServerListView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VydmVyLWxpc3Qtdmlldy9zZXJ2ZXItbGlzdC12aWV3LnRzIl0sIm5hbWVzIjpbIlNlcnZlckxpc3RWaWV3IiwiU2VydmVyTGlzdFZpZXcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUE2QkVBO1FBQ0VDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQS9CSEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7WUFDNUJBLFVBQVVBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO1NBQ3RCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxzZEFpQlRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7O3VCQVFEQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7QUFQWSxzQkFBYyxpQkFPMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlcnZlci1saXN0LXZpZXcvc2VydmVyLWxpc3Qtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXJ2ZXItbGlzdC12aWV3JyxcbiAgcHJvcGVydGllczogWydtb2RlbCddXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgPHRyICpuZy1mb3I9XCIjc2VydmVyIG9mIG1vZGVsXCI+XG4gICAgICAgICAgPHRkPnt7c2VydmVyLm5hbWV9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7c2VydmVyLmlwfX08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ7e3NlcnZlci50b29sdGlwY2xzfX1cIj48aVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEge3tzZXJ2ZXIuaWNvbn19XCI+PC9pPjwvc3Bhbj48L3RkPlxuICAgICAgICAgIDwhLS10b29sdGlwPVwie3tzZXJ2ZXJJdGVtLnRvb2x0aXB9fVwiLS0+XG4gICAgICAgIDwvdHI+XG5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlckxpc3RWaWV3IHtcblxuICBtb2RlbDphbnlbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGVsID0gW107XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==