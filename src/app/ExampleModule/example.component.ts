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
  model1 = true;
  model2 = true;
  model3 = true;
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new ExampleModel(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;
  goToReactiveForms() {
    this.router.navigate(["/example/reactive"]);
  }
  goToTemplateDrivenForms() {
    this.router.navigate(["/example/templatedriven"]);
  }
  onSubmit(heroForm: any) {
    this.submitted = true;
    console.log(heroForm);
    const formControls = heroForm.controls;
    if (heroForm.pristine === true) {
      console.log("nothing changed");
    } else {
      console.log("something changed");
      const object = heroForm.control.value;
      // console.log(object);
      for (const obj in object) {
        if (formControls[obj].dirty) {
          console.log("Old value >", obj);
          console.log("New value >", heroForm.control.value[obj]);
        }
      }
    }
  }
  doSomething(newValue): any {
    this.model.name = newValue;
    console.log(newValue);
    return false;
  }
  alterEgo(newValue) {
    this.model.alterEgo = newValue;
    console.log(newValue);
    return false;
  }
  alterPower(newValue) {
    this.model.power = newValue;
    console.log(newValue);
    return false;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
