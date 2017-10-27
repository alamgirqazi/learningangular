import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
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
