import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private formBuilder: FormBuilder){}
loginForm = this.formBuilder.group({
  email: '',
  password: ''
})
onSubmit(){
  console.log(this.loginForm.value)
  this.loginForm.reset()
}
}
