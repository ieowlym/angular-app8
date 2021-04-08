import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoggingService} from "../services/logging.service";
import {DataService} from "../services/data.service";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './admin-user/admin-user.component';
import { GroupComponent } from './admin-group/admin-group.component';
import { DashBoardComponent } from './admin-dboard/admin-dboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    GroupComponent,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [DataService, LoggingService]
})
export class AdminModule { }
