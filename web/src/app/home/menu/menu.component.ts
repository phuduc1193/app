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

  constructor(private _authService: AuthService) { this.name = "Hello, Stranger"; }

  ngOnInit() {
    let profile = localStorage.getItem('profile');
    if (profile){
      let data = this.jwtHelper.decodeToken(profile);
      if (typeof(data.name) !== 'undefined')
        this.name = data.name;
    }
  }

  logout() {
    this._authService.logout();
  }
}
