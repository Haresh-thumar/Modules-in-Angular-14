import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingRoutingModule } from './dynamic-routing-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingRoutingModule
  ]
})
export class DynamicRoutingModule { }
