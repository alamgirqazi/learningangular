import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "hero-detail",
  templateUrl: "./herodetail.template.html"
})
export class HeroDetailComponent1 {
  name = new FormControl();
}
