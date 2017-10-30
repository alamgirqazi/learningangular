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
      this.http
        .get("https://api.github.com/users/alamgirqazi")
        .subscribe(data => {
          console.log(data);
        });
      // console.log(this.displayData.projectById(params.get("id")));

      this.projectsData = this.displayData.projectById(params.get("id"));
    });
  }

  // projectsData = [
  //   {
  //     id: 1,
  //     name: "Project Typescript",
  //     status: "pending"
  //   },
  //   {
  //     id: 2,
  //     name: "Projects HTML5",
  //     status: "complete"
  //   },
  //   {
  //     id: 3,
  //     name: "Project JS",
  //     status: "pending"
  //   },
  //   {
  //     id: 4,
  //     name: "Project Android",
  //     status: "complete"
  //   },
  //   {
  //     id: 5,
  //     name: "Project iOS",
  //     status: "pending"
  //   },
  //   {
  //     id: 6,
  //     name: "Project C#",
  //     status: "pending"
  //   },
  //   {
  //     id: 7,
  //     name: "Project Angular js",
  //     status: "pending"
  //   },
  //   {
  //     id: 8,
  //     name: "Project Node js",
  //     status: "complete"
  //   }
  // ];
}
