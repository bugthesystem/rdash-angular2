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
var Alerts = (function () {
    function Alerts() {
        this.alerts = [{
                type: 'success',
                msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
            }, {
                type: 'danger',
                msg: 'Found a bug? Create an issue with as many details as you can.'
            }];
    }
    Alerts.prototype.addAlert = function () {
        this.alerts.push({
            msg: 'Another alert!'
        });
    };
    Alerts.prototype.closeAlert = function (index) {
        this.alerts.splice(index, 1);
    };
    Alerts = __decorate([
        angular2_1.Component({
            selector: 'alerts'
        }),
        angular2_1.View({
            template: "\n    <div class=\"row alerts-container\" *ng-if=\"alerts.length\">\n      <div class=\"col-xs-12\">\n        <div class=\"alert alert-{{alert.type}}\" *ng-for=\"#alert of alerts #i=index\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert(i)\" class=\"close\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n          {{alert.msg}}\n        </div>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Alerts);
    return Alerts;
})();
exports.Alerts = Alerts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy50cyJdLCJuYW1lcyI6WyJBbGVydHMiLCJBbGVydHMuY29uc3RydWN0b3IiLCJBbGVydHMuYWRkQWxlcnQiLCJBbGVydHMuY2xvc2VBbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEMsbUJBQW1CLENBQUMsQ0FBQTtBQUVsRTtJQUFBQTtRQW1CRUMsV0FBTUEsR0FBU0EsQ0FBQ0E7Z0JBQ2RBLElBQUlBLEVBQUVBLFNBQVNBO2dCQUNmQSxHQUFHQSxFQUFFQSxrRkFBa0ZBO2FBQ3hGQSxFQUFFQTtnQkFDREEsSUFBSUEsRUFBRUEsUUFBUUE7Z0JBQ2RBLEdBQUdBLEVBQUVBLCtEQUErREE7YUFDckVBLENBQUNBLENBQUNBO0lBV0xBLENBQUNBO0lBVENELHlCQUFRQSxHQUFSQTtRQUNFRSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNmQSxHQUFHQSxFQUFFQSxnQkFBZ0JBO1NBQ3RCQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERiwyQkFBVUEsR0FBVkEsVUFBV0EsS0FBS0E7UUFDZEcsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBbkNISDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbkJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLHdiQVVUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDOUJBLENBQUNBOztlQW9CREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7QUFuQlksY0FBTSxTQW1CbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FsZXJ0cy9hbGVydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldyxDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWxlcnRzJ1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IGFsZXJ0cy1jb250YWluZXJcIiAqbmctaWY9XCJhbGVydHMubGVuZ3RoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17e2FsZXJ0LnR5cGV9fVwiICpuZy1mb3I9XCIjYWxlcnQgb2YgYWxlcnRzICNpPWluZGV4XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoaSlcIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW5cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAge3thbGVydC5tc2d9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydHMge1xuXG4gIGFsZXJ0czphbnlbXSA9IFt7XG4gICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIG1zZzogJ1RoYW5rcyBmb3IgdmlzaXRpbmchIEZlZWwgZnJlZSB0byBjcmVhdGUgcHVsbCByZXF1ZXN0cyB0byBpbXByb3ZlIHRoZSBkYXNoYm9hcmQhJ1xuICB9LCB7XG4gICAgdHlwZTogJ2RhbmdlcicsXG4gICAgbXNnOiAnRm91bmQgYSBidWc/IENyZWF0ZSBhbiBpc3N1ZSB3aXRoIGFzIG1hbnkgZGV0YWlscyBhcyB5b3UgY2FuLidcbiAgfV07XG5cbiAgYWRkQWxlcnQoKSB7XG4gICAgdGhpcy5hbGVydHMucHVzaCh7XG4gICAgICBtc2c6ICdBbm90aGVyIGFsZXJ0ISdcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlQWxlcnQoaW5kZXgpIHtcbiAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=