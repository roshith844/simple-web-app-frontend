import { Component, OnInit } from '@angular/core';
import { BackendManagementService } from 'src/app/services/backend-management.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  allUsers: any = []
  

  editUser(userId: any){
    this.apiService.viewEditUser(userId).subscribe((res)=>{
      console.log(res)
      // this.apiService.editUser()
    })
  }
  deleteUser(userId: any){
    this.apiService.deleteUser(userId).subscribe((res)=>{
      console.log(res)
      // this.apiService.editUser()
      // this.router.navigate['/admin-home']
    })
  }
  logout(){
    this.authService.logout()
    }
constructor(private apiService: BackendManagementService, private router: Router, private authService : AuthService){}
ngOnInit(): void {
  this.apiService.getUserDetails().subscribe((res)=>{
    console.log(res)
 this.allUsers = res.Users
  })
}
}
