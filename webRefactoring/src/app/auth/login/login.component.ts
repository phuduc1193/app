import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/validation.service';
import { flyInOut } from '../../shared/animations';

@Component({
  selector: 'app-login',
  animations: [ flyInOut ],
  host: {'[@flyInOut]':''},
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  message: String;
  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.message = "Welcome, let's log you in to see wonders !";
    this.form =  this._fb.group({
      username: ['', [Validators.required, ValidationService.usernameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }
}
