import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RegisterGuard} from './guards/register.guard';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ClientpanelComponent} from './clientpanel.component';

const routes: Routes = [
  {path: 'client', component: ClientpanelComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent},
      {path: 'add', component: AddClientComponent, canActivate: [AuthGuard]},
      {path: 'edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
      {path: ':id', component: ClientDetailsComponent, canActivate: [AuthGuard]},
      {path: '**', component: NotFoundComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RegisterGuard]
})
export class ClientpanelRoutingModule { }
