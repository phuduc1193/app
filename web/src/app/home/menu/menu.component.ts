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
  greetings: string;

  constructor(private _authService: AuthService) {
    this.greetings = "Let's get you setup"
  }

  ngOnInit() {
    let profile = localStorage.getItem('profile');
    if (profile){
      this.profile = this.jwtHelper.decodeToken(profile);
      this.greetings = "Hi " + this.profile.name;
    }
  }

  logout() {
    this._authService.logout();
  }
}
