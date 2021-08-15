import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

import { LoginComponent } from './components/login/login.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppTopbarComponent } from './components/app-topbar/app-topbar.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';
import { AppAccessDeniedComponent } from './components/app-access-denied/app-access-denied.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppMenuComponent,
    AppTopbarComponent,
    AppMainComponent,
    AppFooterComponent,
    DashboardComponent,
    AppErrorComponent,
    AppNotFoundComponent,
    AppAccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
