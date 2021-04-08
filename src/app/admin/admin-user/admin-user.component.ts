import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";
import { User } from "../../classes/user";

@Component({
  selector: 'admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ds = this.dataService

  ngOnInit(): void {
  }

}
