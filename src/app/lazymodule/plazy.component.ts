import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  template: `<h3>Parent Lazy</h3>
<div *ngFor="let res of results">
  <h5 >
{{res.id}}
</h5>
</div>
  `
})
export class PlazyComponent {
  private results;
  constructor(private http: HttpClient, private data: DisplayData) {
    this.getResults();
  }

  async getResults() {
    this.results = await this.data.getPosts();
  }
}
