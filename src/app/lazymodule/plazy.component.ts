import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  template: `<h3>Parent Lazy</h3>`
})
export class PlazyComponent {
  results;

  constructor(private http: HttpClient, private data: DisplayData) {
    this.getResults();
  }

  async getResults() {
    this.results = await this.data.getPosts();
  }
}
