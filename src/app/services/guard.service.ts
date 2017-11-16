import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Auth0Service } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: Auth0Service, private router: Router) {}

  canActivate() {
    if (this.authService.getAccessTokenId()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
