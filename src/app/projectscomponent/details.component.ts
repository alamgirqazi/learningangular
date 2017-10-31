import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DisplayData } from "./data.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./details.component.html"
})
export class ProjectDetailsComponent {
  public routeId: number;
  public projectsData: any;
  // public jsonPlaceholder: any;
  public jsonPlaceholder = {
    id: "",
    title: "",
    body: ""
  };
  public jsonPlaceholderTwo = {
    id: "",
    title: "",
    body: ""
  };
  public jsonholder: any;
  public apiData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private displayData: DisplayData,
    private http: HttpClient
  ) {
    // console.log(displayData.projectsData);
    // this.projectsData = displayData.projectsData;
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      // console.log(params.get("id"));
      this.routeId = params.get("id");
      this.projectsData = this.displayData.projectById(params.get("id"));

      this.displayData.dataFromJsonPlaceholder(this.routeId).subscribe(data => {
        this.jsonPlaceholder = data;
      });
      this.displayData
        .dataFromJsonPlaceholderTwo(this.routeId)
        .subscribe(data => {
          this.jsonPlaceholderTwo = data;
        });
    });
  }
}
