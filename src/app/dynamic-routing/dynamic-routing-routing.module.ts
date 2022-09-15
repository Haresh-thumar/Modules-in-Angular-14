import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'user', 
    component: UserComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {path: 'company', component: AboutCompanyComponent},
      {path: 'me', component: AboutMeComponent},
    ]
  },
  {
    path: 'user/:id', 
    component: UserComponent
  },
  {
    path: '**', 
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingRoutingModule { }
