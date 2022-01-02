import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor( private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const jsonData = localStorage.getItem('auth');
      const authDetails = jsonData ? JSON.parse(jsonData) : '';
      if (authDetails.email && authDetails.password) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }

}
