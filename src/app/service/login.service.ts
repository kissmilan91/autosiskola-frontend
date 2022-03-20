import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/service/class/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static login :UserLogin = new UserLogin();

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      LoginService.login.token = localStorage.getItem('token')!;
    }
    this.http.post("http://localhost:8000/api/check", {
      token: LoginService.login.token,
      withCredentials : true
    }).subscribe((data:any) => {
      localStorage.setItem('token', data.token);
    });
   }

   login(user:UserLogin) {
    return this.http.post("http://localhost:8000/api/login", {
      email:user.email,
      password:user.password,
      withCredentials : true
    }).subscribe((data:any) => {
      LoginService.login.name = data.name;
      LoginService.login.email = data.email;
      LoginService.login.token = data.token;
      localStorage.setItem('token', data.token);
    });
  }

  logout() {
    if (localStorage.getItem('token')) {
      LoginService.login.token = localStorage.getItem('token')!;
    }
    this.http.post("http://localhost:8000/api/logout", {
      token: LoginService.login.token,  
      withCredentials : true
    }).subscribe(() => {
      LoginService.login = new UserLogin();
      localStorage.removeItem('token');
    }
    );
  }
}
