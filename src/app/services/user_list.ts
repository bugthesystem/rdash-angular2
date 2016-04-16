
import {Injectable} from "angular2/core";

@Injectable()
export class UserListService {
  users:any[] = [{
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

  add(value:any):void {
    this.users.push(value);
  }

  all():any[] {
    return this.users;
  }
}
