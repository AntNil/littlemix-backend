import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.modal";
import {current} from "codelyzer/util/syntaxKind";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;


  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
    this.setCurrentUser();
  }


  showModal() {
    $("#myModal").modal('show');
  }


  logoutCurrentUser() {
    this.currentUser = null;
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  setCurrentUser(){
    this.currentUser = this.userService.getCurrentUser();
  }
}
