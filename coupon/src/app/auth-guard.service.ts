import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.loginService.checkTokenExist()) {
      return true;
    }

    this.loginService.apiBaseUrl = url;
    //this.router.navigate['/'];
    return false;
  }
}
