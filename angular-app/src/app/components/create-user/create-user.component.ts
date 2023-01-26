import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendManagementService } from 'src/app/services/backend-management.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
// createUserForm
constructor(private formBuilder: FormBuilder,private apiService: BackendManagementService, private router: Router  ){

}
createUserForm = this.formBuilder.group({
  name: '',
  email: '',
  password: ''
})

onSubmit(){
  console.log(this.createUserForm.value)
  this.apiService.addUser(this.createUserForm.value).subscribe((res)=>{
    console.log(res)
    // if(res.success == true){
    //   localStorage.setItem('jwt', res.token)
     this.router.navigate(['/admin-home'])
    // }
    })
  this.createUserForm.reset()
}
}
