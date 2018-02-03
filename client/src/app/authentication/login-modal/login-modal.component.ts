import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }


  loginPressed(){
    this.userService.loginWithUser(this.email, this.password);


  }

}
