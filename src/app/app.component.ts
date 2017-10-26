import { Component } from "@angular/core";
// import { OtherComponent } from "./other/other.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular App";

  constructor(private router: Router) {}
  changeUrl() {
    // console.log(this.router.url);
    this.router.navigate(["/child"]);

    // alert(this.router.url);
  }
}
