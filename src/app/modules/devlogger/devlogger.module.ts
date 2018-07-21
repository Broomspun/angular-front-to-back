import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './services/log.service';
import { DevloggerComponent } from './devlogger.component';
import {DevloggerRoutingModule} from './devlogger-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DevloggerRoutingModule,
  FormsModule
  ],
  declarations: [
    LogFormComponent,
    LogsComponent,
    DevloggerComponent
  ],
  providers: [LogService]
})
export class DevloggerModule { }
