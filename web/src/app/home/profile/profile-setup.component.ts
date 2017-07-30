import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidationService } from '../../core/validation.service';
import { ResourceService } from '../../core/resource.service';

import { flyInOut } from '../../shared/animations';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss'],
  animations: [ flyInOut ],
  host: {'[@flyInOut]':''}
})
export class ProfileSetupComponent implements OnInit {
  basicForm: FormGroup;
  referenceForm: FormGroup;
  step: number;
  listPhoneTypes: any = [];
  listGenders: any = [];
  listCountries: any = [];
  listRelationshipStatus: any = [];

  constructor(private _fb: FormBuilder, private _resource: ResourceService) {
    this.getPhoneTypes();
    this.getGenders();
    this.getCountries();
    this.getRelationshipStatus();
    this.step = 0;
  }

  ngOnInit() {
    this.basicForm =  this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: new FormControl(),
      gender: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phones: new FormArray([
        this.initPhone()
      ])
    });

    this.referenceForm = this._fb.group({
      dob: ['', Validators.required],
      status: new FormControl(),
      addresses: new FormArray([
        this.initAddress()
      ])
    });

  }

  setStep(step: number) {
    this.step = step;
  }

  initPhone() {
    return this._fb.group({
      value: ['', [Validators.required, ValidationService.phoneValidator]],
      type: ['', Validators.required]
    });
  }

  initAddress() {
    return this._fb.group({
      street: new FormControl(),
      locality: new FormControl(),
      postal_code: new FormControl(),
      region: new FormControl()
    });
  }

  addPhone() {
    const control = <FormArray>this.basicForm.controls['phones'];
    control.push(this.initPhone());
  }

  removePhone(i: number) {
    const control = <FormArray>this.basicForm.controls['phones'];
    control.removeAt(i);
  }

  addAddress() {
    const control = <FormArray>this.referenceForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.referenceForm.controls['addresses'];
    control.removeAt(i);
  }

  get phones(): FormArray {
    return this.basicForm.get('phones') as FormArray;
  }

  get addresses(): FormArray {
    return this.referenceForm.get('addresses') as FormArray;
  }

  getPhoneTypes() {
    this._resource.getPhoneTypes().subscribe(
      response => {
        response.forEach(element => {
          this.listPhoneTypes.push(element);
        });
      }
    );
  }

  getGenders() {
    this._resource.getGenders().subscribe(
      response => {
        response.forEach(element => {
          this.listGenders.push(element);
        });
      }
    );
  }

  getCountries() {
    this._resource.getCountries().subscribe(
      response => {
        response.forEach(element => {
          this.listCountries.push(element.name);
        });
      }
    );
  }

  getRelationshipStatus() {
    this._resource.getRelationshipStatus().subscribe(
      response => {
        response.forEach(element => {
          this.listRelationshipStatus.push(element.name);
        });
      }
    );
  }
}
