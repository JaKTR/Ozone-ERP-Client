import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'contacts', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notices', component: ProfileComponent },
  { path: 'trailer', component: ProfileComponent },
  { path: 'help', component: ProfileComponent },
  { path: 'issues', component: ProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
