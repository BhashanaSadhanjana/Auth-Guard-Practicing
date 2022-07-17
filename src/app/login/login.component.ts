import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {SignInData} from "../model/signInData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isFormInvalid = false;
  isInvalidCredentials = false;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){

    if (!signInForm.valid){

      this.isFormInvalid=true;
      this.isInvalidCredentials = false;
      return;
    }

    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm : NgForm){
    const  signInData =new SignInData(signInForm.value.email,signInForm.value.password);
    console.log(signInData);
    if (!this.authenticationService.authenticate(signInData)){
      this.isFormInvalid = false;
      this.isInvalidCredentials = true;
    }
  }

}
