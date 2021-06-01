import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClientsComponent } from './clients/clients.component';
import { ContectusComponent } from './contectus/contectus.component';
import { EmployersComponent } from './employers/employers.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'clients',component:ClientsComponent},
  {path:'contectus',component:ContectusComponent},
  {path:'employers',component:EmployersComponent},
  {path:'jobs',component:JobsComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'profile-view', component:ProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
