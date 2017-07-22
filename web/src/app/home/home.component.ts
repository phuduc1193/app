import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { fadeOut } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fadeOut ]
})
export class HomeComponent implements OnInit {
  show: boolean;
  
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.currentLoginState.subscribe(state => this.show = (state == 2 ? true : false));
  }

}