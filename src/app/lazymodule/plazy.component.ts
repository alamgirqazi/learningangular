import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
import { UserService } from "./../services/custom/user.service";
@Component({
  templateUrl: "./plazy.component.html"
})
export class PlazyComponent {
  results;
  filteredResults;
  constructor(
    private http: HttpClient,
    private data: DisplayData,
    private userService: UserService
  ) {
    console.log(this.data.myval);
    this.getResults();
    // this.userService.getstuff();
    // console.log("resss");
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
    console.log("delete index", index);
    this.results.splice(index, 1);
    this.filteredResults.splice(index, 1);
    console.log(this.results);
    // alert(JSON.stringify(res));
  }
  update(index) {
    console.log("update index", index);
    this.results[Object.keys(this.results)[index]].body = "Updated";
    this.filteredResults[Object.keys(this.results)[index]].body = "Updated";
  }
  async getResults() {
    this.results = await this.data.getPosts();
    // this.filteredResults = this.results;
  }
}
// ngFor="trackBy: trackById;let i = index;"
