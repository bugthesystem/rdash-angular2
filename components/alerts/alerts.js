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
            template: "\n    <div class=\"row alerts-container\" *ng-if=\"alerts.length\">\n      <div class=\"col-xs-12\">\n        <div class=\"alert alert-{{alert.type}}\" *ng-for=\"#alert of alerts #i=index\" role=\"alert\">\n          <button type=\"button\" (click)=\"closeAlert(index)\" class=\"close\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n          {{alert.msg}}\n        </div>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Alerts);
    return Alerts;
})();
exports.Alerts = Alerts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy50cyJdLCJuYW1lcyI6WyJBbGVydHMiLCJBbGVydHMuY29uc3RydWN0b3IiLCJBbGVydHMuYWRkQWxlcnQiLCJBbGVydHMuY2xvc2VBbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEMsbUJBQW1CLENBQUMsQ0FBQTtBQUVsRTtJQUFBQTtRQW1CRUMsV0FBTUEsR0FBU0EsQ0FBQ0E7Z0JBQ2RBLElBQUlBLEVBQUVBLFNBQVNBO2dCQUNmQSxHQUFHQSxFQUFFQSxrRkFBa0ZBO2FBQ3hGQSxFQUFFQTtnQkFDREEsSUFBSUEsRUFBRUEsUUFBUUE7Z0JBQ2RBLEdBQUdBLEVBQUVBLCtEQUErREE7YUFDckVBLENBQUNBLENBQUNBO0lBV0xBLENBQUNBO0lBVENELHlCQUFRQSxHQUFSQTtRQUNFRSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNmQSxHQUFHQSxFQUFFQSxnQkFBZ0JBO1NBQ3RCQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERiwyQkFBVUEsR0FBVkEsVUFBV0EsS0FBS0E7UUFDZEcsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBbkNISDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbkJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFFBQVFBLEVBQUVBLDRiQVVUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDOUJBLENBQUNBOztlQW9CREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7QUFuQlksY0FBTSxTQW1CbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FsZXJ0cy9hbGVydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldyxDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWxlcnRzJ1xufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IGFsZXJ0cy1jb250YWluZXJcIiAqbmctaWY9XCJhbGVydHMubGVuZ3RoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17e2FsZXJ0LnR5cGV9fVwiICpuZy1mb3I9XCIjYWxlcnQgb2YgYWxlcnRzICNpPWluZGV4XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoaW5kZXgpXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgIHt7YWxlcnQubXNnfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRzIHtcblxuICBhbGVydHM6YW55W10gPSBbe1xuICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICBtc2c6ICdUaGFua3MgZm9yIHZpc2l0aW5nISBGZWVsIGZyZWUgdG8gY3JlYXRlIHB1bGwgcmVxdWVzdHMgdG8gaW1wcm92ZSB0aGUgZGFzaGJvYXJkISdcbiAgfSwge1xuICAgIHR5cGU6ICdkYW5nZXInLFxuICAgIG1zZzogJ0ZvdW5kIGEgYnVnPyBDcmVhdGUgYW4gaXNzdWUgd2l0aCBhcyBtYW55IGRldGFpbHMgYXMgeW91IGNhbi4nXG4gIH1dO1xuXG4gIGFkZEFsZXJ0KCkge1xuICAgIHRoaXMuYWxlcnRzLnB1c2goe1xuICAgICAgbXNnOiAnQW5vdGhlciBhbGVydCEnXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZUFsZXJ0KGluZGV4KSB7XG4gICAgdGhpcy5hbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9