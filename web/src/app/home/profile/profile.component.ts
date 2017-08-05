import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../core/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private _storage: StorageService) { }

  ngOnInit() {
    this.profile = this._storage.getCookieJwtObject('profile');
    console.log(this.profile);
  }

}
