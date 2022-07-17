import { Injectable } from '@angular/core';
import {SignInData} from "../../model/signInData";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly savedUser = new SignInData('bhashana_s@epiclanka.net','InFeRnO.B');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData) : boolean {
    if (this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home'])
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData) : boolean {
    return this.checkEmail(signInData.email) && this.checkPassword(signInData.password);
  }

  private checkEmail(email : string) : boolean{
    return email === this.savedUser.email;
  }

  private checkPassword(password : string) : boolean{

    return  password === this.savedUser.password;
  }

  logOut(){
    this.isAuthenticated = false;
    this.router.navigate([''])
  }

}
