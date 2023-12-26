import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
const routes:Routes = [
  {
    path:'',component :LoginpageComponent,
  },
  {
    path:'signup',component :SignupComponent,
  },
  {
    path:'forget',component :ForgetComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
