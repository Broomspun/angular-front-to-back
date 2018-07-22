import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
<<<<<<< HEAD
import {FormGroup} from '@angular/forms';
=======
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b

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
<<<<<<< HEAD
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
=======
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b

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
<<<<<<< HEAD
    if (!valid) {
=======
    if(!valid){
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
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
