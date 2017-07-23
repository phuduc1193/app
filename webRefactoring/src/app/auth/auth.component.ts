import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeOut } from '../shared/animations';

@Component({
  selector: 'app-auth',
  template: `<div class="wrapper" [@fadeOut]>
                <app-bubbles-bg></app-bubbles-bg>
                <router-outlet></router-outlet>
              </div>`,
  animations: [ fadeOut ],
  host: {'[@fadeOut]': ''},
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.navigateByUrl('/Auth/Login');
  }

}
