import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevloggerComponent} from './devlogger.component';

const routes: Routes = [
  {
    path: 'devlogger',
    component: DevloggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevloggerRoutingModule { }
