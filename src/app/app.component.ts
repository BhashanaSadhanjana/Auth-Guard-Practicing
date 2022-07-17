import { Component } from '@angular/core';
import {AuthenticationService} from "./service/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-guard-practice';

  constructor(public authenticationService: AuthenticationService) {
  }

  logOut(){
    this.authenticationService.logOut();
  }
}
