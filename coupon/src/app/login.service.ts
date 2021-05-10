import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiBaseUrl= 'http://localhost:3000/api';
  currentUser : User = {
    firstname:'',
    lastname: '',
    username: '',
    password:''
  };
  loginStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private http: HttpClient, private router: Router){}

  registerUser(user: User){
    return this.http.post(this.apiBaseUrl+'/register',user);
  }

  login(authCredentials: any) {
    return this.http.post(this.apiBaseUrl + '/authenticate', authCredentials);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  checkTokenExist():boolean{
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  isAdmin(){
    const userStr = localStorage.getItem('currentUser');
    if(userStr){
      const user = JSON.parse(userStr);
      return user.isAdmin;
    }
    else
      return false;
  }

  logout(){  
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate([""]);
    this.loginStatus.emit(false);
  }

  
}

