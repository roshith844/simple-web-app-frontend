import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
// createUserForm
constructor(private formBuilder: FormBuilder ){

}
createUserForm = this.formBuilder.group({
  name: '',
  email: '',
  password: ''
})

onSubmit(){
  console.log(this.createUserForm.value)
  this.createUserForm.reset()
}
}
