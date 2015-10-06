var UserListService = (function () {
    function UserListService() {
        this.users = [{
                id: 1,
                name: 'Joe Bloggs',
                role: 'Super Admin',
                account: 'AZ23045'
            }, {
                id: 2,
                name: 'Timothy Hernandez',
                role: 'Admin',
                account: 'AU24783'
            }, {
                id: 3,
                name: 'Joe Bickham',
                role: 'User',
                account: 'AM23781'
            }];
    }
    UserListService.prototype.get = function () {
        return this.users;
    };
    UserListService.prototype.add = function (value) {
        this.users.push(value);
    };
    UserListService.prototype.all = function () {
        return this.users;
    };
    return UserListService;
})();
exports.UserListService = UserListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXJfbGlzdC50cyJdLCJuYW1lcyI6WyJVc2VyTGlzdFNlcnZpY2UiLCJVc2VyTGlzdFNlcnZpY2UuY29uc3RydWN0b3IiLCJVc2VyTGlzdFNlcnZpY2UuZ2V0IiwiVXNlckxpc3RTZXJ2aWNlLmFkZCIsIlVzZXJMaXN0U2VydmljZS5hbGwiXSwibWFwcGluZ3MiOiJBQUFBO0lBQUFBO1FBQ0VDLFVBQUtBLEdBQVNBLENBQUNBO2dCQUNiQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDTEEsSUFBSUEsRUFBRUEsWUFBWUE7Z0JBQ2xCQSxJQUFJQSxFQUFFQSxhQUFhQTtnQkFDbkJBLE9BQU9BLEVBQUVBLFNBQVNBO2FBQ25CQSxFQUFFQTtnQkFDREEsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ0xBLElBQUlBLEVBQUVBLG1CQUFtQkE7Z0JBQ3pCQSxJQUFJQSxFQUFFQSxPQUFPQTtnQkFDYkEsT0FBT0EsRUFBRUEsU0FBU0E7YUFDbkJBLEVBQUVBO2dCQUNEQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDTEEsSUFBSUEsRUFBRUEsYUFBYUE7Z0JBQ25CQSxJQUFJQSxFQUFFQSxNQUFNQTtnQkFDWkEsT0FBT0EsRUFBRUEsU0FBU0E7YUFDbkJBLENBQUNBLENBQUNBO0lBYUxBLENBQUNBO0lBWENELDZCQUFHQSxHQUFIQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFFREYsNkJBQUdBLEdBQUhBLFVBQUlBLEtBQVlBO1FBQ2RHLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVESCw2QkFBR0EsR0FBSEE7UUFDRUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBQ0hKLHNCQUFDQTtBQUFEQSxDQTdCQSxBQTZCQ0EsSUFBQTtBQTdCWSx1QkFBZSxrQkE2QjNCLENBQUEiLCJmaWxlIjoic2VydmljZXMvdXNlcl9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJMaXN0U2VydmljZSB7XG4gIHVzZXJzOmFueVtdID0gW3tcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnSm9lIEJsb2dncycsXG4gICAgcm9sZTogJ1N1cGVyIEFkbWluJyxcbiAgICBhY2NvdW50OiAnQVoyMzA0NSdcbiAgfSwge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdUaW1vdGh5IEhlcm5hbmRleicsXG4gICAgcm9sZTogJ0FkbWluJyxcbiAgICBhY2NvdW50OiAnQVUyNDc4MydcbiAgfSwge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdKb2UgQmlja2hhbScsXG4gICAgcm9sZTogJ1VzZXInLFxuICAgIGFjY291bnQ6ICdBTTIzNzgxJ1xuICB9XTtcblxuICBnZXQoKTpzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnM7XG4gIH1cblxuICBhZGQodmFsdWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLnVzZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=