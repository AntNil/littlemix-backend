import { Injectable } from '@angular/core';
import {User} from "../models/user.modal";
import {HttpClient} from "@angular/common/http";
import {Params, Router, RouterLink} from "@angular/router";


@Injectable()
export class UserService {

  user: User;
  currentUser : User;

  constructor(private http:HttpClient, private router: Router) {

  }

  saveUserToDatabase(user: User) {
    this.http.post('http://localhost:8080/user/create', user).subscribe(data => {
      console.log(data);
    });
  }

  loginWithUser(user: User): any {
   return this.http.post('http://localhost:8080/user/checkLoginDetailsForUser/', user);
    /*  this.user = data as User;
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/home']);
      return data;
    },()=>{
      return data;
    }, ()=>{

    })*/

  }

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser){
      return this.currentUser;
    }
    return null;
  }


}
