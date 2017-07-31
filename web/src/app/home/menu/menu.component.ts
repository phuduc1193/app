import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  greetings: string;
  profile: any;

  constructor(private _authService: AuthService, private _userService: UserService) { }

  ngOnInit() {
    this._userService.greetingsMessage.subscribe(message => this.greetings = message);
    this.profile = localStorage.getItem('profile');
  }

  logout() {
    this._authService.logout();
  }
}
