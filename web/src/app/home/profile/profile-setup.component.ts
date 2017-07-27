import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/validation.service';
import { PhoneTypeEnum } from '../../shared/enum';


@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss']
})
export class ProfileSetupComponent implements OnInit {
  form: FormGroup;
  listPhoneType: any = [];

  constructor(private _fb: FormBuilder) {
    this.getPhoneType();
  }

  ngOnInit() {
    this.form =  this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: new FormControl(),
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phone: ['', [Validators.required, ValidationService.phoneValidator]],
      phoneType: ['', Validators.required],
    });
  }

  getPhoneType() {
    for (let item in PhoneTypeEnum) {
      if (isNaN(Number(item))) {
        this.listPhoneType.push({name: item});
      }
    }
  }

}
