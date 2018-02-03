import { Injectable } from '@angular/core';
import {User} from "../models/user.modal";

@Injectable()
export class UserService {

  constructor() { }

  saveUserToDatabase(user: User) {
    console.log(user);
  }

  loginWithUser(email: string, password: string) {
    console.log("email = " + email + ", Password = " + password);
  }
}
