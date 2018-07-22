import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import {Log} from '../../../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean;

  constructor(private logService: LogService) {
    this.loaded = true;
  }

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
<<<<<<< HEAD
      if (clear) {
=======
      if(clear) {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
        this.selectedLog = {id: '', text: '', date: ''};
      }
    });

    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }

  onSelect(log: Log, $event) {
    $event.preventDefault();
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }

}
