import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.modal";
import {Router} from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: User;
  errorText: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {

  }


  loginPressed(){
    this.userService.loginWithUser(this.user).subscribe( data=>{
        this.user = data as User;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.hideModal();
        this.router.navigate(['/home']);
    },
      ()=>{
        this.errorText = "Wrong email or password!";
      });

    this.user = new User();


  }

  hideModal() {
    $("#myModal").modal('hide');
  }

}
