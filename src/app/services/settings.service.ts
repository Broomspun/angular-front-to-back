import { Injectable } from '@angular/core';

import { Settings } from '../modules/clientpanel/models/Settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
<<<<<<< HEAD
    if (localStorage.getItem('settings') != null) {
=======
    if(localStorage.getItem('settings') != null) {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
