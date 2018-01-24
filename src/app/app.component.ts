import { Component } from "@angular/core";
// import { OtherComponent } from "./other/other.component";
import { Router } from "@angular/router";
import { Auth0Service } from "./services/auth.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("myAwesomeAnimation", [
      state(
        "none",
        style({
          transform: "scale(1)"
        })
      ),
      state(
        "active",
        style({
          transform: "scale(1.2)"
        })
      ),
      transition(
        "* => *",
        animate(
          "300ms ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
            style({ opacity: 1, transform: "translateY(35px)", offset: 0.5 }),
            style({ opacity: 1, transform: "translateY(0)", offset: 1.0 })
          ])
        )
      )
    ])
  ]
})
export class AppComponent {
  title = "Angular App";
  state: string = "none";

  time;
  animateMe() {
    this.state = this.state === "none" ? "active" : "none";
  }
  constructor(private router: Router, private auth0: Auth0Service) {
    this.time = this.auth0.time;
  }
  changeUrl() {
    // console.log(this.router.url);
    this.router.navigate(["/child"]);

    // alert(this.router.url);
  }
}
