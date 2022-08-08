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
    
    // if(this.hasUser()){
    //   return true
    // }
    // alert("You don't have persmissions")
    // return false

    if(!this.authService.isTokenExpired()){
      return true
    }
    this.router.navigate(["/login"])
    return false

  }

  // hasUser():boolean{
  //   return false
  // }
  
}
