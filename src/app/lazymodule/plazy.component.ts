import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  templateUrl: "./plazy.component.html"
})
export class PlazyComponent {
  private results;
  private filteredResults;
  constructor(private http: HttpClient, private data: DisplayData) {
    this.getResults();
  }

  filterString = "";
  search(val: any) {
    if (!val) {
      this.filteredResults = this.results;
    }
    this.filteredResults = this.results.filter(
      res => res.body.indexOf(val) >= 0
    );
  }
  clicked(res) {
    alert(JSON.stringify(res));
  }
  delete(index) {
    this.results.splice(index, 1);
    this.filteredResults.splice(index, 1);
    console.log(this.results);
    // alert(JSON.stringify(res));
  }
  update(index) {
    this.results[Object.keys(this.results)[index]].body = "Updated";
    this.filteredResults[Object.keys(this.results)[index]].body = "Updated";
  }
  async getResults() {
    this.results = await this.data.getPosts();
    this.filteredResults = this.results;
  }
}
// ngFor="trackBy: trackById;let i = index;"
