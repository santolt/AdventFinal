import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router){

  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    // if(!this.authService.isTokenExpired()){
    //   // alert("No tienes acceso")

    //   return true
    let isLoggedIn = this.authService.isTokenExpired()

    if (isLoggedIn) {
      return false;

    }
    this.router.navigate(["/login"])
    return true

  }
  
}
