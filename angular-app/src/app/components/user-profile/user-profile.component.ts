import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any;
  url='assets/'
onSelectFile(e : any){
  if(e.target.files){
    var reader = new FileReader
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (event: any)=>{
      this.url = event.target.result;
    }
  }

}

 ngOnInit(): void {
 let token = localStorage.getItem('jwt')
 if(token != null){
  this.userData = atob(token.split('.')[1])
  this.url= 'assets/userData._id'
 }
  console.log(token)
 }

    
}
