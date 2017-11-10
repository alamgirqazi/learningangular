import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
@Component({
  template: `<h3>Parent Lazy</h3>

<ul>
<ng-template [ngForOf]="results" let-res ngFor let-i="index" >
<li> 
  {{ res.body }}
  <br> <button (click)="delete(i)">X</button>
  <br><br> <button (click)="update(i)">Update</button>
  <br>
  <br>
</li></ng-template>
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
  update(index) {
    this.results[Object.keys(this.results)[index]].body = "Updated";
  }
  async getResults() {
    this.results = await this.data.getPosts();
  }
}
// ngFor="trackBy: trackById;let i = index;"
