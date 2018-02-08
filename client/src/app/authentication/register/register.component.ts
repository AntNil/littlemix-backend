import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.modal";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;



  constructor(private userService: UserService,
              private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.saveUserToDatabase(this.user).subscribe(data =>{
      this.router.navigate(['/home']);
    }, ()=>{
      console.log("Error, user not registered");
    })
  }


}
