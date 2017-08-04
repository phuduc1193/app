import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { StorageService } from '../../core/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  greetings: string;
  profile: any;

  constructor(private _router: Router, private _userService: UserService, private _storage: StorageService) { }

  ngOnInit() {
    this._userService.greetingsMessage.subscribe(message => this.greetings = message);
    this.profile = this._storage.getCookieJwtObject('profile');
  }

  logout() {
    this._storage.clear();
    this._router.navigate(['/login']);
  }
}
