import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DevloggerModule} from './modules/devlogger/devlogger.module';
import { UsersModule } from './modules/users/users.module';
import { DropdownhoverDirective } from './dropdownhover.directive';
import { ClientpanelModule } from './modules/clientpanel/clientpanel.module';
import {AuthService} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    DropdownhoverDirective
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    DevloggerModule,
    UsersModule,
    ClientpanelModule,
  ],
  providers: [AuthService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
