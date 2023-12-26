import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(
    private router:Router,
  ){}

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "emailId":new FormControl("",Validators.required),
    "Confirm password":new FormControl("",Validators.required),
});
onSubmit() {
  console.log("reactive form submitted");
  console.log(this.form);
}
login(){
  console.log(this.form);
    
}
signUp(){
  this.router.navigate(['/signup'])
  
}
forget(){
  this.router.navigate(['/forget'])
}
}
