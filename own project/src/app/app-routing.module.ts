import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes:Routes = [
  {
    path:'',component :LoginpageComponent,
  },
  {
    path:'signup',component :SignupComponent,
  },
  {
     path: 'forgot-password', component: ForgotPasswordComponent ,
    },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
