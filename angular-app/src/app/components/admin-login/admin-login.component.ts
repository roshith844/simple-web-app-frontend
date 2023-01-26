import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BackendManagementService } from 'src/app/services/backend-management.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
// AdminloginForm
constructor( private authService : AuthService ,private formBuilder: FormBuilder, private apiService: BackendManagementService, private router: Router  ){}
AdminloginForm = this.formBuilder.group({
  email: '',
  password: ''
})
onSubmit(){
  console.log(this.AdminloginForm.value)
this.apiService.adminLogin(this.AdminloginForm.value).subscribe((res)=>{
console.log(res)
if(res.success == true){
  this.authService.login()
  localStorage.setItem('jwt', res.token)
 this.router.navigate(['/admin-home'])
}
})
  this.AdminloginForm.reset()
}
}
