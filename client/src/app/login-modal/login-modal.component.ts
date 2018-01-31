import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
num: number = 0;
  constructor() { }

  ngOnInit() {
  }

  bla() {
    console.log("CLicked me! Yes! I LOVE IT!!!");
    num++;
  }

}
