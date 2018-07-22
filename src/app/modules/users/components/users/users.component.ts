import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  showUserForm: boolean;
  @ViewChild('userForm') form: FormGroup;
  data: any;

  constructor(private userService: UserService) {
    this.showExtended = true;
    this.loaded = false;
    this.enableAdd = false;
    this.showUserForm = false;
  }

  ngOnInit() {
      this.userService.getData().subscribe(data => {
        console.log(data);
      });

      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });

  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
  }


}
