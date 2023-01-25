import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder){

  }
  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  })

  onSubmit(){
    console.log(this.signupForm.value)
    this.signupForm.reset()
  }

}
