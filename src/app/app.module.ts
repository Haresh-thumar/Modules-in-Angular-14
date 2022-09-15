import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { DynamicRoutingModule } from './dynamic-routing/dynamic-routing.module';
import { AboutComponent } from './dynamic-routing/about/about.component';
import { AboutCompanyComponent } from './dynamic-routing/about-company/about-company.component';
import { AboutMeComponent } from './dynamic-routing/about-me/about-me.component';
import { ContactComponent } from './dynamic-routing/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicRoutingComponent,
    AboutComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    ContactComponent,
    
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
