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
var RdWidgetBody = (function () {
    function RdWidgetBody() {
        this.loading = false;
        this.classes = '';
    }
    RdWidgetBody = __decorate([
        angular2_1.Component({
            selector: 'rd-widget-body',
            properties: ['loading', 'classes']
        }),
        angular2_1.View({
            template: "\n    <div class=\"widget-body {{classes}}\">\n      <rd-loading *ng-if=\"loading\"></rd-loading>\n      <div *ng-if=\"!loading\" class=\"widget-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidgetBody);
    return RdWidgetBody;
})();
exports.RdWidgetBody = RdWidgetBody;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmQtd2lkZ2V0LWJvZHkvcmQtd2lkZ2V0LWJvZHkudHMiXSwibmFtZXMiOlsiUmRXaWRnZXRCb2R5IiwiUmRXaWRnZXRCb2R5LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRW5FO0lBbUJFQTtRQUNFQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBdEJIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtZQUMxQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0E7U0FDbkNBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDhOQU9UQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDOUJBLENBQUNBOztxQkFTREE7SUFBREEsbUJBQUNBO0FBQURBLENBdkJBLEFBdUJDQSxJQUFBO0FBUlksb0JBQVksZUFReEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3JkLXdpZGdldC1ib2R5L3JkLXdpZGdldC1ib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZC13aWRnZXQtYm9keScsXG4gIHByb3BlcnRpZXM6IFsnbG9hZGluZycsICdjbGFzc2VzJ11cbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIndpZGdldC1ib2R5IHt7Y2xhc3Nlc319XCI+XG4gICAgICA8cmQtbG9hZGluZyAqbmctaWY9XCJsb2FkaW5nXCI+PC9yZC1sb2FkaW5nPlxuICAgICAgPGRpdiAqbmctaWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFJkV2lkZ2V0Qm9keSB7XG4gIGxvYWRpbmc6Ym9vbGVhbjtcbiAgY2xhc3NlczpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jbGFzc2VzID0gJyc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==