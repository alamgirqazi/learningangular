import { Component, Inject, OnInit } from "@angular/core";
import { AuthService } from "./../projectscomponent/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Auth0Service } from "./../services/auth.service";
import { UserService } from "./../services/custom/user.service";
import { Observable } from "rxjs/Observable";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

import { DisplayData } from "../projectscomponent/data.service";
// import { LoginService } from "../services/loginservice.service";
interface Credentials {
  username: string;
  password: string;
}
// <form #f="ngForm" (ngSubmit)="onLogin(f.value)" *ngIf="!auth.loggedIn()">

@Component({
  selector: "app-login",
  styles: [
    `.submitted {
  border: 1px solid red;}
  .submittedgreen {
    border: 1px solid green;}`
  ],
  template: `
  <ng2-slim-loading-bar ></ng2-slim-loading-bar>
<div class="row">
<div class="col-sm-6">
    <form #f="ngForm" (ngSubmit)="onLogin(f.value)">
    <br>
    <br>
      <input type="text" (change)="changeVal(username)" [class.submitted]="isUserError"  placeholder="username" #username="ngModel" class="form-control" required name="username" ngModel ngControl="username">
      <br>
      <div *ngIf="f.submitted && !username.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Name is required
    </div>

      <input [class.submitted]="isPassError" (change)="changePassVal(password)" type="password" placeholder="password" #password="ngModel" name="password" minlength="3" maxLength="24" required  class="form-control" ngModel ngControl="password">
      <br>
      <div *ngIf="f.submitted && !password.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Choose password between 8 to 32 characters
    </div>
    <br>
    <div *ngIf="isError" class="alert alert-danger">
    <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
    {{errorText}}
  </div>
  <div class="checkbox checkbox-warning help-block ">
  <input id="checkbox5"  ngModel ngControl="checkbox" name="rememberMe" type="checkbox">
  <label for="checkbox5">
     Remember Me
  </label>
</div>
  <br>
      <button type="submit">Submit</button>
      <br>
      <br>
      <br>

      <div *ngIf="isSuccess" class="alert alert-success">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      User Logged in successfully
    </div>
      </form>
      </div>
      </div>
  `
})
export class LazyLoginComponent {
  credentials: Credentials;
  isError: boolean;
  isSuccess: boolean;
  isPassError: boolean;
  isUserError: boolean;
  errorText = "";
  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private auth: AuthService,
    private displayData: DisplayData,
    private userService: UserService,
    private http: HttpClient,
    private auth0: Auth0Service // private loginService: LoginService
  ) {
    this.getResults();
    this.userService.getstuff();
    console.log("yerrssss");
  }
  //   showError(): boolean
  // {if(this.isError === true && username.valid)
  //  return true;
  //  else return false
  mydata;
  jsonPlaceholder;
  // }
  result;
  changeVal(username) {
    // console.log("value changed");
    // console.log(username);
    if (username.valid) this.isUserError = false;
  }
  changePassVal(password) {
    // console.log("value changed");
    // console.log(password);
    if (password.valid) this.isPassError = false;
  }
  onLogin(credentials) {
    this.startLoading();
    console.log(credentials);
    // this.getPostDat();
  }
  startLoading() {
    this.slimLoadingBarService.start(() => {
      console.log("Loading complete");
    });
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }
  async getPostDat() {
    const res = await this.displayData.getPosts();
  }
  async getResults() {
    this.result = await this.displayData.getPosts();
    // this.filteredResults = this.results;
  }
}

// const abc = this.http
//   .post("http://localhost:3000/api/Users/login", {
//     username: credentials.username,
//     password: credentials.password
//   })
//   .subscribe(
//     data => {
//       console.log(data);
//       //   let newdata;
//       //   //   data.rememberMe = rememberMe;
//       //   newdata.ttl = data["ttl"];
//       //   newdata.id = data["id"];
//       //   newdata.userId = data["userId"];
//       //   newdata.created = data["created"];
//       //   this.authService.setToken(newdata);
//       //   return newdata;

//       // const res = await this.auth0.initializer();
//       // console.log(this.auth0.getId());
//       // localStorage.setItem("id_token", JSON.stringify(data));
//       // localStorage.setItem("id", data["id"]);
//       // localStorage.setItem("ttl", data["ttl"]);
//       // localStorage.setItem("userId", data["userId"]);
//       // this.isError = false;
//       // this.isSuccess = true;
//       // this.isUserError = false;
//       // this.isPassError = false;
//     },
//     err => {
//       console.log("Something went wrong!");
//       console.log(err);
//       // this.isError = true;
//       // this.errorText = "Error! Wrong credentials";
//       // this.isSuccess = false;
//       // this.isUserError = true;
//       // this.isPassError = true;
//     }
//   );
