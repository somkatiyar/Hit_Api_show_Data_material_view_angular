import { Injectable, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";






@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: Http, @Inject('baseURL') private baseURL: string) {}

  getdata(): Observable<any>{
    return this.http.get(this.baseURL+'photos').map(
      response=>response.json())
      .catch((err: Response | any) => {
      return Observable.throw(err.statusText);
    })
  }



}
