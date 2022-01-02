import { HomeComponentComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'home',
    component: HomeComponentComponent,
    canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
