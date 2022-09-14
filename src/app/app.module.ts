import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { DynamicRoutingModule } from './dynamic-routing/dynamic-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DynamicRoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DynamicRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
