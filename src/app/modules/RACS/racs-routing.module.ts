import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: '', component: ProfileComponent, pathMatch: 'full', children: [
      {path: 'checks', component: ProfileComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacsRoutingModule {
}
