import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from "./admin.component";
import {UserComponent} from "./admin-user/admin-user.component";
import {GroupComponent} from "./admin-group/admin-group.component";
import {DashBoardComponent} from "./admin-dboard/admin-dboard.component";

const routes: Routes = [
  {path: '', component: DashBoardComponent},
  {path: 'users', component: UserComponent},
  {path: 'groups', component: GroupComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
