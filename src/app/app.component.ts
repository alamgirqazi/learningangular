import { Component } from "@angular/core";
// import { OtherComponent } from "./other/other.component";
import { Router } from "@angular/router";
import { Auth0Service } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular App";
  time;

  constructor(private router: Router, private auth0: Auth0Service) {
    this.time = this.auth0.time;
  }
  changeUrl() {
    // console.log(this.router.url);
    this.router.navigate(["/child"]);

    // alert(this.router.url);
  }
}
