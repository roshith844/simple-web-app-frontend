import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path:'login',component:  LoginComponent },
  {path:'signup',component: SignupComponent },
  {path:'',component: LandingComponent },
  {path:'home',component:HomeComponent, canActivate: [GuardService] },

  {path:'admin-login',component:AdminLoginComponent },
  {path:'admin-home',component: AdminHomeComponent,canActivate: [GuardService]  },
  {path:'user-profile',component: UserProfileComponent, canActivate: [GuardService] },
  {path:'create-user',component: CreateUserComponent,canActivate: [GuardService] },

  {path:'edit-user',component: EditUserComponent,canActivate: [GuardService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
