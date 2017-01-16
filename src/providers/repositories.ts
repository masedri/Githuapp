import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Repositories provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Repositories {
  baseUrl: string = "https://api.github.com";
  // username: string = "";

  constructor(public http: Http) {
    console.log('Hello Repositories Provider');
  }

  getRepositories(username: string): Observable<Response>{
    return this.http.get(this.baseUrl+"/users/"+username+"/repos");
  }

   getInforUser(username: string): Observable<Response>{
    return this.http.get(this.baseUrl+"/users/"+username);
  }



}
