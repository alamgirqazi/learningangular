import { Injectable } from "@angular/core";

import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
@Injectable()
export class AuthService {
  isLoggedIn = false;

  // // store the URL so we can redirect after logging in
  // redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Observable.of(true)
  //     .delay(1000)
  //     .do(val => (this.isLoggedIn = true));
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
  constructor(private http: HttpClient) {}

  login(credentials) {
    console.log(Math.floor(Math.random() * 10) + 1);
    this.http.get("https://jsonplaceholder.typicode.com/users/1").subscribe(
      // We're assuming the response will be an object
      // with the JWT on an id_token key
      data => localStorage.setItem("id_token", credentials),
      // data => localStorage.setItem("id_token", JSON.stringify(data)),
      error => console.log(error)
    );
    console.log(credentials);
  }
}
