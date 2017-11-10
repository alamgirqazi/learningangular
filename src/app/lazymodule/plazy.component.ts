import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  template: `<h3>Parent Lazy</h3>

<ul>
<li *ngFor="let res of results; trackBy: trackById;let i = index;"> 
  {{ res.body }}
  <br> <span (click)="delete(i)">X</span>
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
  trackById(index: number, res: any): number {
    return res.id;
  }

  clicked(res) {
    alert(JSON.stringify(res));
  }
  delete(index) {
    this.results.splice(index, 1);
    console.log(this.results);
    // alert(JSON.stringify(res));
  }
  async getResults() {
    this.results = await this.data.getPosts();
  }
}
