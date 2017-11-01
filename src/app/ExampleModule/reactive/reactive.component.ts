import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

// import { ExampleModel } from "./example.model";
@Component({
  selector: "app-examplereactive",
  templateUrl: "./reactive.template.html"
})
export class ReactiveComponent implements OnInit {
  constructor() {}
  user: FormGroup;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(""),
      account: new FormGroup({
        email: new FormControl(""),
        confirm: new FormControl("")
      })
    });
  }
}
