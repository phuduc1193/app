import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-menu></app-menu>
                <router-outlet></router-outlet>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
