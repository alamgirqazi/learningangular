import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Auth0Service } from "./auth.service";
import { Observable } from "rxjs/Observable";
import { Injector } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService: Auth0Service;

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    this.authService = this.injector.get(Auth0Service); // get it here within intercept

    // const authHeader = this.authService.getAccessTokenId();
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set(
        "Authorization",
        this.authService.getAccessTokenId()
      )
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
