import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = 'https://fakestoreapi.com';

@Injectable({
    providedIn: 'root'
})
export class AppSerivce {
    constructor(private http: HttpClient) { }
    product (limit : number): any {
        return this.http.get(`${api}/products?limit=${limit}`);
    }
}
