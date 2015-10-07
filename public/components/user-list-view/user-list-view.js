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
var UserListView = (function () {
    function UserListView() {
        this.model = [];
    }
    UserListView = __decorate([
        angular2_1.Component({
            selector: 'user-list-view',
            properties: ['model']
        }),
        angular2_1.View({
            template: "\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th class=\"text-center\">ID</th>\n          <th>Username</th>\n          <th>Role</th>\n          <th>Account</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ng-for=\"#user of model\">\n          <td class=\"text-center\">{{user.id}}</td>\n          <td>{{user.name}}</td>\n          <td>{{user.role}}</td>\n          <td>{{user.account}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListView);
    return UserListView;
})();
exports.UserListView = UserListView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci1saXN0LXZpZXcvdXNlci1saXN0LXZpZXcudHMiXSwibmFtZXMiOlsiVXNlckxpc3RWaWV3IiwiVXNlckxpc3RWaWV3LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE4QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxFO0lBaUNFQTtRQUNFQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUFuQ0hEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1lBQzFCQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsZ2lCQXFCVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWVBLENBQUNBO1NBQzlCQSxDQUFDQTs7cUJBUURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQXBDQSxBQW9DQ0EsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy91c2VyLWxpc3Qtdmlldy91c2VyLWxpc3Qtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLWxpc3QtdmlldycsXG4gIHByb3BlcnRpZXM6IFsnbW9kZWwnXVxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5JRDwvdGg+XG4gICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cbiAgICAgICAgICA8dGg+Um9sZTwvdGg+XG4gICAgICAgICAgPHRoPkFjY291bnQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmctZm9yPVwiI3VzZXIgb2YgbW9kZWxcIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dXNlci5pZH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3t1c2VyLm5hbWV9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7dXNlci5yb2xlfX08L3RkPlxuICAgICAgICAgIDx0ZD57e3VzZXIuYWNjb3VudH19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0VmlldyB7XG5cbiAgbW9kZWw6YW55W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RlbCA9IFtdO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=