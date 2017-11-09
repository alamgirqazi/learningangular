import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyService } from "./lazy.service";

@Component({
  template: `<p>Lazy Component</p>
 <button (click)="seeMore()"> Goto More </button>
 <button (click)="childlazy()"> Child Comp </button>
<lazy-clazy [childMessage]="parentMessage"></lazy-clazy>

<h1> New MSG from @output: {{message}}</h1>
<lazy-clazy (messageEvent)="receiveMessage($event)"></lazy-clazy>
<br>
<br>
<button (click)="changeObserv()">change Observ </button>
<br>
<br>
{{sharedMsg}}
`
})
export class LazyComponent implements OnInit {
  parentMessage = "message from parent";
  message: string;
  sharedMsg: string;
  constructor(private data: LazyService, public router: Router) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.sharedMsg = message));
  }

  receiveMessage($event) {
    this.message = $event;
  }
  seeMore() {
    this.router.navigate(["/lazy/more"]);
  }
  changeObserv() {
    this.data.changeMessage("changed by Lazy comp");
  }
  childlazy() {
    this.router.navigate(["/lazy/clazy"]);
  }
}
