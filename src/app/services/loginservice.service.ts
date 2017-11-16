// import { Injectable } from "@angular/core";

// // import "rxjs/ad/d/observable/of";
// // import "rxjs/add/operator/delay";
// // import "rxjs/add/operator/do";
// import { Observable } from "rxjs/Observable";
// // import "rxjs/add/operator/map";
// // import { SDKToken } from "./models/BaseModels";
// // interface InterfaceUserAuth{
// import { HttpClient } from "@angular/common/http";
// // import { StorageBrowser } from "./storage.browser";
// // }
// @Injectable()
// export class LoginService {
//   constructor(protected http: HttpClient) {}

//   url: any;

//   getstuff(credentials): Observable<any> {
//     console.log("heyy");
//     console.log(credentials);
//     this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(
//       data => {
//         console.log(data);
//       },

//       err => {}
//     );
//   }

//   async login(credentials): Promise<any> {
//     this.url = "http://localhost:3000/api/Users/login";
//     const response = await this.http.get(this.url).toPromise();
//     console.log(response);
//     return response;
//   }
// }
