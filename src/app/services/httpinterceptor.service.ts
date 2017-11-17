// // import { Injectable } from "@angular/core";
// // import {
// //   HttpEvent,
// //   HttpInterceptor,
// //   HttpHandler,
// //   HttpRequest
// // } from "@angular/common/http";
// // import { Auth0Service } from "./auth.service";
// // import { Observable } from "rxjs/Observable";
// // import { Injector } from "@angular/core";

// // @Injectable()
// // export class AuthInterceptor implements HttpInterceptor {
// //   private authService: Auth0Service;

// //   constructor(private injector: Injector) {}

// //   intercept(
// //     req: HttpRequest<any>,
// //     next: HttpHandler
// //   ): Observable<HttpEvent<any>> {
// //     // Get the auth header from the service.
// //     this.authService = this.injector.get(Auth0Service); // get it here within intercept

// //     // const authHeader = this.authService.getAccessTokenId();
// //     // Clone the request to add the new header.
// //     const authReq = req.clone({
// //       headers: req.headers.set(
// //         "Authorization",
// //         this.authService.getAccessTokenId()
// //       )
// //     });
// //     // Pass on the cloned request instead of the original request.
// //     return next.handle(authReq);
// //   }
// // }

// import { Injector } from "@angular/core";

// import { Injectable } from "@angular/core";
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from "@angular/common/http";
// // import { AuthService } from "./auth/auth.service";
// import { Observable } from "rxjs/Observable";
// import { Auth0Service } from "./auth.service";
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private injector: Injector) {}
//   private auth0: Auth0Service;

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.auth0 = this.injector.get(Auth0Service); // get it here within intercept

//     request = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${this.auth0.getAccessTokenId()}`
//       }
//     });
//     return next.handle(request);
//   }
// }
