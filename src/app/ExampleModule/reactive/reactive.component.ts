import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

// import { ExampleModel } from "./example.model";
@Component({
  selector: "app-examplereactive",
  templateUrl: "./reactive.template.html"
})
export class ReactiveComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  user: FormGroup;
  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }
  // ngOnInit() {
  //   this.user = new FormGroup({
  //     name: new FormControl("", [Validators.required, Validators.minLength(2)]),
  //     account: new FormGroup({
  //       email: new FormControl("", Validators.required),
  //       confirm: new FormControl("", Validators.required)
  //     })
  //   });
  // }
  ngOnInit() {
    this.user = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ["", Validators.required],
        confirm: ["", Validators.required]
      })
    });
  }
}
