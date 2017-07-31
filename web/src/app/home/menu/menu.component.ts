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

  constructor(private _authService: AuthService, private _userService: UserService) {
    this.greetings = "Let's get you setup"
  }

  ngOnInit() {
    this._userService.greetingsMessage.subscribe(message => this.greetings = message);
  }

  logout() {
    this._authService.logout();
  }
}
