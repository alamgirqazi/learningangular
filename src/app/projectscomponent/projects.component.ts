import { Component } from "@angular/core";
import { DisplayData } from "./data.service";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
  private projectsData: any;
  private a: any;
  constructor(private displayData: DisplayData) {}

  ngOnInit() {
    this.projectsData = this.displayData.projects;
  }
}
