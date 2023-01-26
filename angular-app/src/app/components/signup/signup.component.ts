import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendManagementService } from 'src/app/services/backend-management.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder,private apiService: BackendManagementService, private router: Router ){

  }
  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  })

  onSubmit(){
    console.log(this.signupForm.value)
    this.apiService.userSignup(this.signupForm.value).subscribe((res)=>{
      console.log(res)
      // if(res.success == true){
      //   localStorage.setItem('jwt', res.token)
      this.router.navigate(['/home'])
      // }
      })
    this.signupForm.reset()
  }

}
