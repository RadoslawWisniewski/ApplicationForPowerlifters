import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfpListComponent} from "./afp-list/afp-list.component";
import {AfpCreateComponent} from "./afp-create/afp-create.component";
import {AfpRankComponent} from "./afp-rank/afp-rank.component";

const routes: Routes = [
  {path: 'user', component:AfpListComponent},
  {path:  'user/create', component:AfpCreateComponent},
  {path:  'user/rank', component:AfpRankComponent},
  {path: 'user/edit/:id', component:AfpCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfpRoutingModule { }
