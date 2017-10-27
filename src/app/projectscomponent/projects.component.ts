import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
  projectsData = [
    {
      id: 1,
      name: "Project Typescript",
      status: "pending"
    },
    {
      id: 2,
      name: "Projects HTML5",
      status: "complete"
    },
    {
      id: 3,
      name: "Project JS",
      status: "pending"
    },
    {
      id: 4,
      name: "Project Android",
      status: "complete"
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
      status: "complete"
    }
  ];
}
