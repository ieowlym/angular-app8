import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private loggingService: LoggingService
  ) {}

  getUsers() {
    let uList:User[];
    uList=[
      new User(1,"Zhong Li","IT2017"),
      new User(2,"Ning Guang","IT2019"),
      new User(3,"Venti 'Barbatos'","IT2017"),
      new User(4,"Gui Zhong","IT2018"),
      new User(5,"Diluc Ragnvindir","IT2020"),
      new User(6,"Jean Gunnhildr","IT2019"),
      new User(7,"Kaeya Alberich","IT2020")
    ];
    this.loggingService.log('List of users: ' + uList);

    return uList;
  }

}
