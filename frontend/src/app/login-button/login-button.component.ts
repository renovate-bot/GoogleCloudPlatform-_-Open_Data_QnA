import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  photoURL: any;
  userLoggedIn: boolean = false;
  constructor(public fireservice: SharedService, public loginService: LoginService,
    public dialog: Dialog) {
  }
  getLogin() {
    this.fireservice.googleSignin().then((res => {
      this.userLoggedIn = true;
      this.photoURL = res?.photoURL;
      this.updateUserData(res);
      this.dialog.closeAll()
    }))
  }

  updateUserData(userDetails: any): void {
    this.loginService.sendUserDetails(userDetails);
  }
}
