import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RacsComponent} from "./modules/RACS/racs.component";
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {RacsModule} from "./modules/RACS/racs.module";


const routes: Routes = [
  {path: '', redirectTo: 'racs', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'racs',
    component: RacsComponent,
    loadChildren: () => RacsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
