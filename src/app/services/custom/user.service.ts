import { Inject, Injectable, Injector } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Auth0Service } from "./../auth.service";

@Injectable()
export class UserService {
  constructor(private authService: Auth0Service, protected http: HttpClient) {}
  url: any;
  val = 3;
  getstuff(): Observable<any> {
    // console.log("heyy");
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }
  getStu(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  async getPosts(): Promise<any> {
    console.log("USER-SERVICE");
    const result = await this.http
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .toPromise();
    console.log("result");
    console.log(result);
    return result;
  }

  //   async login(credentials): Promise<any> {
  //   this.url = "http://localhost:3000/api/Users/login";
  //   const response = await this.http.get(this.url).toPromise();
  //   console.log(response);
  //   return response;
  // }
  // async login(credentials): Promise<any> {
  //   this.url = "http://localhost:3000/api/Users/login";
  //   const response = await this.http.get(this.url).toPromise();
  //   console.log(response);
  //   return response;
  // }
}
