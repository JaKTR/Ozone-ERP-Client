import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProfileComponent },
  // { path: 'rosters/:truck', component: ProfileComponent },
  // { path: 'checks', component: ProfileComponent },
  // { path: 'contacts', component: ProfileComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'notices', component: ProfileComponent },
  // { path: 'trailer', component: ProfileComponent },
  // { path: 'help', component: ProfileComponent },
  // { path: 'issues', component: ProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class RacsRoutingModule {}
