import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(private formBuilder: FormBuilder ){

  }
  editUserForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  })

  onSubmit(){
    console.log(this.editUserForm.value)
    this.editUserForm.reset()
  }
}
