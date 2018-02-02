import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.modal";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;


  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.saveUserToDatabase(this.user);
  }


}
