import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  template: `<flash-messages></flash-messages>
<app-authentication *ngIf="!goodToken"></app-authentication>
<app-home></app-home>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  goodToken: boolean;

  constructor(private _authService: AuthService) { this.goodToken = false; }

  ngOnInit () {
    this._authService.checkToken().subscribe(res => this.handleResponse(res));
  }

  handleResponse(response: any) {
    if (typeof(response.status) != 'undefined' && response.status.code == 200){
      this._authService.setLoginState(2);
    }
  }
}
