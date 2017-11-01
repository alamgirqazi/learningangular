import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ExampleModel } from "./example.model";
@Component({
  selector: "app-example",
  templateUrl: "./example.template.html",
  styleUrls: ["./example.style.css"]
})
export class ExampleComponent {
  constructor(public router: Router) {}

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new ExampleModel(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
