import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./namedoutlet.component.html"
})
export class NamedoutletComponent {
  constructor(public router: Router) {}
}
