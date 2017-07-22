import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  template: `<flash-messages></flash-messages>
<app-authentication *ngIf="!tokenNotExpired"></app-authentication>
<app-home></app-home>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tokenNotExpired: boolean;

  constructor(private _authService: AuthService) { this.tokenNotExpired = tokenNotExpired(); }

  ngOnInit () {
    this.checkTokenExpire();
  }

  checkTokenExpire () {
    if (tokenNotExpired()){
      this.tokenNotExpired = false;
      this._authService.setLoginState(2);
      this._authService.checkToken().subscribe(res => this.handleResponse(res));
    }
  }

  handleResponse(response: any) {
    if (typeof(response.status) != 'undefined' && response.status.code == 200){
      this._authService.setLoginState(2);
    }
  }
}
