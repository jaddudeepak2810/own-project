import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
    email: string = '';
  
    submitForm() {
      // Add logic to handle form submission and password reset
      console.log('Email submitted:', this.email);
    }
}
