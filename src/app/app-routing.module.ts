import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAccessDeniedComponent } from './components/app-access-denied/app-access-denied.component';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: AppErrorComponent },
  { path: 'access', component: AppAccessDeniedComponent },
  { path: 'notfound', component: AppNotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
