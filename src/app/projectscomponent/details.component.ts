import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "project-details",
  templateUrl: "./details.component.html"
})
export class ProjectDetailsComponent {
  public routeId: number;
  // let routeId: number;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      console.log(params.get("id"));
      this.routeId = params.get("id");
    });
  }

  projectsData = [
    {
      id: 1,
      name: "All Projects",
      status: "pending"
    },
    {
      id: 2,
      name: "Projects HTML5",
      status: "pending"
    },
    {
      id: 3,
      name: "Project JS",
      status: "pending"
    },
    {
      id: 4,
      name: "Project Android",
      status: "pending"
    },
    {
      id: 5,
      name: "Project iOS",
      status: "pending"
    },
    {
      id: 6,
      name: "Project C#",
      status: "pending"
    },
    {
      id: 7,
      name: "Project Angular js",
      status: "pending"
    },
    {
      id: 8,
      name: "Project Node js",
      status: "pending"
    }
  ];
}