import { Injectable } from "@angular/core";

import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

// interface InterfaceUserAuth{

// }
@Injectable()
export class AuthService {
  isLoggedIn = true;
  // loggedIn() {
  //   return tokenNotExpired();
  // }
  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }
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
  public getToken(): string {
    return localStorage.getItem("id_token");
  }
  login(credentials) {
    // console.log(Math.floor(Math.random() * 10) + 1);
    // const url =
    //   "https://jsonplaceholder.typicode.com/users/" +
    //   (Math.floor(Math.random() * 10) + 1);
    // this.http.get(url).subscribe(
    //   // We're assuming the response will be an object
    //   // with the JWT on an id_token key
    //   data => {
    //     // console.log(data);
    //     // localStorage.setItem("id_token", data["id"]);
    //     // localStorage.setItem("name", data["name"]);
    //     // localStorage.setItem("data", JSON.stringify(data));
    //   },
    //   // data => localStorage.setItem("id_token", JSON.stringify(data)),
    //   error => console.log(error)
    // );
    // console.log(credentials);
  }
}
// this.http
// .post('/api/items/add', body, {
//   headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
// })
// .subscribe();
