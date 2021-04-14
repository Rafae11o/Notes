import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser  } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let userInfo = localStorage.getItem("userInfo");
    if(userInfo && JSON.parse(userInfo) != {}){
      this.router.navigate(['home']);
    }
  }

  loginByGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.setUser({userId: user.id, username: user.name});
      this.router.navigate(['home']);
    });
  }

}
