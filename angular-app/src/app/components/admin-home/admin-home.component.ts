import { Component, OnInit } from '@angular/core';
import { BackendManagementService } from 'src/app/services/backend-management.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  allUsers: any = []
constructor(private apiService: BackendManagementService, private router: Router){}
ngOnInit(): void {
  this.apiService.getUserDetails().subscribe((res)=>{
    console.log(res)
 this.allUsers = res.Users
  })
}
}
