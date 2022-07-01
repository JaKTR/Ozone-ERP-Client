import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RacsComponent} from "./racs.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RacsAdminModule} from "../RACS-admin/racs-admin.module";
import {RacsGuardService} from "./services/racs-guard/racs-guard.service";

const routes: Routes = [
  {
    path: '', component: RacsComponent, canActivateChild: [RacsGuardService], children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {
        path: 'admin',
        loadChildren: () => RacsAdminModule
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacsRoutingModule {
}
