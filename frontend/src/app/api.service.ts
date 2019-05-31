import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL: string = "http://localhost:3000/";
    constructor(public http: HttpClient) { }
    // read method    
    public get(path) {

        var endpoint = this.API_URL + path;
        return this.http.get(endpoint);

    }
}
