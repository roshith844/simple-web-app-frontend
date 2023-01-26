import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
// AdminloginForm
constructor( private formBuilder: FormBuilder){}
AdminloginForm = this.formBuilder.group({
  email: '',
  password: ''
})
onSubmit(){
  console.log(this.AdminloginForm.value)
  this.AdminloginForm.reset()
}
}
