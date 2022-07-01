import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../modules/authentication/components/login/login.component";
import {RacsModule} from "../modules/RACS/racs.module";
import {RacsGuardService} from "../modules/RACS/services/racs-guard/racs-guard.service";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'racs',
    loadChildren: () => RacsModule,
    canLoad: [RacsGuardService],
    canActivate: [RacsGuardService]
  },
  {path: '', pathMatch: 'full', redirectTo: 'racs'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
