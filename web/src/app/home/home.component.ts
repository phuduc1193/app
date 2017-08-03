import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-home',
  template: `<app-menu></app-menu>
             <router-outlet class="content-wrapper"></router-outlet>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getProfile();
  }

}
