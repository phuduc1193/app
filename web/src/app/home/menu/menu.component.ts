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
  profile: any;

  constructor(private _authService: AuthService) { this.profile.name = "Hello, Stranger"; }

  ngOnInit() {
    let storage = localStorage.getItem('profile');
    if (storage){
      this.profile = this.jwtHelper.decodeToken(storage);
    }
  }

  logout() {
    this._authService.logout();
  }
}
