import { Component, OnInit, Input } from '@angular/core';

import { DataService } from "../../services/data.service";
import { User } from "../../classes/user";

@Component({
  selector: 'admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() dataService: any;

  uList: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getUsers() {
    this.uList = this.dataService.getUsers();

  }

}
