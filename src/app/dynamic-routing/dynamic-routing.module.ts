import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingRoutingModule } from './dynamic-routing-routing.module';
import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    UserComponent,
    ErrorPageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DynamicRoutingRoutingModule
  ]
})
export class DynamicRoutingModule { }
