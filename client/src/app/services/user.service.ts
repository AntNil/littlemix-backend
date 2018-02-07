import { Injectable } from '@angular/core';
import {User} from "../models/user.modal";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  saveUserToDatabase(user: User) {
    this.http.post('http://localhost:8080/user/create', user).subscribe(data => {
      console.log(data);
    });
  }

  loginWithUser(email: string, password: string) {
    console.log("email = " + email + ", Password = " + password);
  }
}
