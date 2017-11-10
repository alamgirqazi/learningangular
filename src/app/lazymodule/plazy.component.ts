import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  template: `<h3>Parent Lazy</h3>

<ul>
<li *ngFor="let res of results" (click)="clicked(res)"> 
  {{ res.body }}
</li>
</ul>
  `
})
export class PlazyComponent {
  private results;
  constructor(private http: HttpClient, private data: DisplayData) {
    this.getResults();
  }
  myId(index, res) {
    console.log(res);
    return res ? res.id : undefined;
  }
  clicked(res) {
    alert(JSON.stringify(res));
  }
  async getResults() {
    this.results = await this.data.getPosts();
  }
}
