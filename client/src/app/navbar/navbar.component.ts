import { Component, OnInit } from '@angular/core';


declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
hello: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  bla() {
    this.hello = !this.hello;
    console.log("Loooog");
  }

  showModal() {
    $("#myModal").modal('show');
  }

}
