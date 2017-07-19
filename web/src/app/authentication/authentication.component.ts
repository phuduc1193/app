import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `<app-login *ngIf="isLogin; else registrationForm"></app-login>
<ng-template #registrationForm><app-registration></app-registration></ng-template>`
})

export class AuthenticationComponent implements OnInit {
  renderLogin: boolean;

  @Input() isLogin = true;

  constructor() {
  }

  ngOnInit() {
    for (var key in localStorage){
      console.log(key)
    }
  }

}
