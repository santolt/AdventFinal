import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const TOKEN_NAME = 'token'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpClient) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME) || "";
  }


  setToken(token:string):void{
    localStorage.setItem(TOKEN_NAME, token)
  }

  login(username: string, password: string): Observable<any>{
    return this.httpService.post("", {username, password})
  }

  logout():void{
    localStorage.removeItem(TOKEN_NAME)
  }

  isTokenExpired(_token?: string): boolean {
    /* if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }
    return this.helper.isTokenExpired(token);*/
    return false;
  }

}
