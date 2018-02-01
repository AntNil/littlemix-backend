import { Injectable } from '@angular/core';
import {User} from "../models/user.modal";

@Injectable()
export class UserService {

  constructor() { }

  saveUserToDatabase(user: User) {
    console.log(user);
  }
}
