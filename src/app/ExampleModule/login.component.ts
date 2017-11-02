import { Component } from "@angular/core";
import { AuthService } from "./../projectscomponent/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface Credentials {
  username: string;
  password: string;
}
// <form #f="ngForm" (ngSubmit)="onLogin(f.value)" *ngIf="!auth.loggedIn()">

@Component({
  selector: "app-login",
  template: `
 <h2 *ngIf="auth.loggedIn()">Wow you're logged in</h2> 
    <form #f="ngForm" (ngSubmit)="onLogin(f.value)"  *ngIf="!auth.loggedIn()">
    <br>
    <br>
      <input type="text" placeholder="username" #username="ngModel" class="form-control" required name="username" ngModel ngControl="username">
      <br>
      <div *ngIf="f.submitted && !username.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Name is required
    </div>
      <input type="password" placeholder="password" #password="ngModel" name="password" minlength="3" maxLength="24" required  class="form-control" ngModel ngControl="password">
      <br>
      <div *ngIf="f.submitted && !password.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Choose password between 8 to 24 characters
    </div>
      <button type="submit">Submit</button>
    
      </form>
  `
})
export class LoginComponent {
  credentials: Credentials;

  constructor(private auth: AuthService, private http: HttpClient) {}

  onLogin(credentials) {
    // let url = "http://localhost:3000/users/login"

    const abc = this.http
      .post(
        "http://localhost:3000/api/Users/login",
        {
          username: credentials.username,
          password: credentials.password
        },
        {
          headers: new HttpHeaders().set("Authorization", "my-auth-token")
        }
      )
      .subscribe(data => {
        // console.log("tokenKey", data["id"]);
        console.log(data);
        localStorage.setItem("id_token", JSON.stringify(data));
        localStorage.setItem("id", data["id"]);
        let val = localStorage.getItem("id_token");
        console.log("TTL", val["ttl"]);
      });
    this.auth.login(credentials);
  }
}
