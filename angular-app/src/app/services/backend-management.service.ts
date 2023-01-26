import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendManagementService {

  constructor(private http: HttpClient) { }
  adminLogin(data: any){
    return this.http.post<any>('http://localhost:9000/admin/login', data)
  }
  userLogin(data: any){
    return this.http.post<any>('http://localhost:9000/login', data)
  }
  userSignup(data: any){
    return this.http.post<any>('http://localhost:9000/register', data)
  }
  getUserDetails(){
    return this.http.get<any>('http://localhost:9000/admin/allUsers')
  }
  addUser(data: any){
    return this.http.post<any>('http://localhost:9000/admin/addUser', data)
  }
  viewEditUser(data: any){
    return this.http.get<any>(`http://localhost:9000/admin/editUser/${data}`)
  }
  editUser(data: any){
    return this.http.post<any>('http://localhost:9000/admin/editUser/id', data)
  }
  deleteUser(data: any){
    return this.http.get<any>(`http://localhost:9000/admin/deleteUser/${data}`)
  }
}
