import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class RolesProvider {

  apiUrl: string = environment.urlAPI;

  constructor(private http: HttpClient) {
    
  }

  getRoles(): Observable<any> {
    const url = this.apiUrl + 'api/roles';
    const header = { 'Content-Type': 'application/json' };
    return this.http.get(url, { headers: header });
  }

  
}