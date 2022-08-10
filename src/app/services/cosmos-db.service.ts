import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CosmosDbService {

  private confiUrl!: string;

  constructor(private http: HttpClient) {
   }

   getData(): Observable<any>{

      this.confiUrl = `${environment.cosmoUrl}`

      const data = this.http.get<any>(this.confiUrl)
      return data
   }
}
