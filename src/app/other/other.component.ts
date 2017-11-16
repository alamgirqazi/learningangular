import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AuthService } from "./../projectscomponent/auth.service";
import { UserService } from "./../services/custom/user.service";
interface Credentials {
  username: string;
  password: string;
}
@Component({
  selector: "app-other",

  templateUrl: "other.component.html"
})
export class OtherComponent {
  message: string;
  credentials: Credentials;
  isError: boolean;
  isSuccess: boolean;
  isPassError: boolean;
  isUserError: boolean;
  errorText = "";
  constructor(
    public authService: AuthService,
    public router: Router,
    private userService: UserService
  ) {
    console.log("ABC COmp");
    console.log(this.userService.val);
    this.getResults();
  }

  result;
  changeVal(username) {
    if (username.valid) this.isUserError = false;
  }
  changePassVal(password) {
    if (password.valid) this.isPassError = false;
  }
  onLogin(credentials) {
    // console.log(this.userService.projects);
    console.log(credentials);
  }

  async getResults() {
    this.result = await this.userService.getPosts();
    // this.filteredResults = this.results;
  }
}
