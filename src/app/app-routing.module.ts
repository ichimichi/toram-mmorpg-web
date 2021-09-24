import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAccessDeniedComponent } from './components/common-pages/app-access-denied/app-access-denied.component';
import { AppErrorComponent } from './components/common-pages/app-error/app-error.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppNotFoundComponent } from './components/common-pages/app-not-found/app-not-found.component';
import { AchievementComponent } from './components/character/achievement/achievement.component';
import { BuildComponent } from './components/character/build/build.component';
import { ProductionComponent } from './components/character/production/production.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'production', component: ProductionComponent },
      { path: 'build', component: BuildComponent },
      { path: 'achievement', component: AchievementComponent },
      { path: 'map', component: MapComponent },
    ],
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
