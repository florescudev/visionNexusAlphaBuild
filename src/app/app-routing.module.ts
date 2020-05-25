import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { DashboardViewComponent } from './auth/dashboard-view/dashboard-view.component';


const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'dashboard', component: DashboardViewComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
