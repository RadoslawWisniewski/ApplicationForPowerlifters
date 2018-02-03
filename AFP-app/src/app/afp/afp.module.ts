import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfpRoutingModule } from './afp-routing.module';
import { AfpListComponent } from './afp-list/afp-list.component';
import { AfpCreateComponent } from './afp-create/afp-create.component';
import { AfpRankComponent } from './afp-rank/afp-rank.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AfpRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [AfpListComponent, AfpCreateComponent, AfpRankComponent]
})
export class AfpModule { }
