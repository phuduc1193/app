import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeOut } from '../shared/animations';
import { StorageService } from '../core/storage.service';

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

  constructor(private _router: Router, private _storage: StorageService) { }

  ngOnInit() {
    if (this._storage.isLoggedIn())
      this._router.navigate(['/']);
    else this._router.navigate(['/login']);
  }

}
