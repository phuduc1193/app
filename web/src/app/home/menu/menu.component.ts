import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  jwtHelper: JwtHelper = new JwtHelper();
  name: string;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    let data = this.jwtHelper.decodeToken(token);
    if (typeof(data.name) === 'undefined')
      this.name = "Hello, Stranger";
    else
      this.name = data.name;
  }

  logout() {
    this._authService.logout();
  }
}
