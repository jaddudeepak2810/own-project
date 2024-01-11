import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

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
    {
      path: 'home', component: HomeComponent,
     },
     {
      path: 'footer', component: FooterComponent,
     },
     {
      path: 'layout', component: LayoutComponent,
     },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
