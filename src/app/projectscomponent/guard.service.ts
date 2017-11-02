import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("/example");
      return false;
    }
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot // RouterStateSnapshot
  // ): boolean {
  //   // let url: string = state.url;

  //   // return this.checkLogin(url);
  // }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) {
  //     return true;
  //   }

  //   // Store the attempted URL for redirecting
  //   // this.authService.redirectUrl = url;

  //   // Navigate to the login page with extras
  //   this.router.navigate(["/"]);
  //   return false;
  // }
}
