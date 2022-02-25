import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeforeLoginComponent } from './before-login.component';

const routes: Routes = [
  { path: '', component: BeforeLoginComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeLoginRoutingModule {}
