import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BackendManagementService } from 'src/app/services/backend-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private authService : AuthService, private formBuilder: FormBuilder, private apiService: BackendManagementService, private router: Router ){}
loginForm = this.formBuilder.group({
  email: '',
  password: ''
})
onSubmit(){
  console.log(this.loginForm.value)
  this.apiService.userLogin(this.loginForm.value).subscribe((res)=>{
    console.log(res)
    if(res.success == true){
      this.authService.login()
      localStorage.setItem('jwt', res.token)
     this.router.navigate(['/home'])
    }
  })
  this.loginForm.reset()
}
}
