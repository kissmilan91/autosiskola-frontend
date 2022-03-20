
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/service/class/user-login';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserLogin = new UserLogin();

  constructor(private loginService:LoginService) { 
    this.user.email = "";
    this.user.password = "";
  }

  ngOnInit(): void {
  }

  get loginuser() {
    return LoginService.login.name;
  }

  get loggedin() {
    return LoginService.login.email != "";
  }

  login() {
    this.loginService.login(this.user);
  }

  logout() {
    this.loginService.logout();
  }


}
