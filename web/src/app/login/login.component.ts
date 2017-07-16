import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _http: Http) { }

  ngOnInit() {
    this.form =  this._fb.group({
      username: ['', [Validators.required, Validators.pattern('(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]],
    });
  }

  login() {
    this._http.post(environment.apiUrl + 'auth/login', this.form.value)
      .map(res => res.json())
      .subscribe(result => console.log(result));
  }
}
