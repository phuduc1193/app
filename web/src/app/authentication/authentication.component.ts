import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `<app-login></app-login>
            <app-registration></app-registration>`
})

export class AuthenticationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    for (var key in localStorage){
      console.log(key)
    }
  }

}
