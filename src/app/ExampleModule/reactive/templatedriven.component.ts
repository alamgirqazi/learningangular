import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { InterfaceUser } from "./user.interface";
// import { ExampleModel } from "./example.model";
@Component({
  selector: "app-exampletemplatedriven",
  templateUrl: "./templatedriven.template.html"
})
export class TemplateDrivenComponent {
  constructor() {}
  user: InterfaceUser = {
    name: "alam",
    account: {
      email: "",
      confirm: ""
    }
  };
  onSubmit({ value, valid }: { value: InterfaceUser; valid: boolean }) {
    console.log(value, valid);
    alert(JSON.stringify(value));
  }
}
