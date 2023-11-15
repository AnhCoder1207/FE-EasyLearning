import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = 'https://apingweb.com';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  //  get login
  login(body: any): any {
    return this.http.post(`${api}/api/login`,body);
  }
  checkLogin(): any {
    
    let jsonData = sessionStorage.getItem('login');
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return false;
    }
  }
}
