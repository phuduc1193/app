import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { fadeOut } from '../animations';

@Component({
  selector: 'app-authentication',
  template: ` <div class="wrapper" *ngIf="show">
                <app-bubbles-bg></app-bubbles-bg>
                <app-login></app-login>
                <app-registration></app-registration>
              </div> `,
  styleUrls: ['./authentication.component.scss'],
  animations: [ fadeOut ]
})

export class AuthenticationComponent implements OnInit {
  show: boolean;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this._authService.currentLoginState.subscribe(state => this.handleState(state));
  }

  handleState(state: number) {
    if (state == 2)
      setTimeout(function() { this.show = false }, 1000);
    else this.show = true;
  }
}
