import { Component } from "@angular/core";

@Component({
  selector: "app-brandnew",
  template: `
<h1> Brand New component</h1>
<button  type="button" class="btn btn-success" routerLink="/abc" > /ABC</button>
<button  type="button" class="btn btn-success" routerLink="/xyz" > /XYZ</button>
<button type="button" class="btn btn-primary" routerLink='/brandnew/more' routerLinkActive="active">More</button>

`
})
export class BrandNewComponent {}
