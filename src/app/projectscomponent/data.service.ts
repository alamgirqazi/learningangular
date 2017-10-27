import { Injectable } from "@angular/core";

@Injectable()
export class DisplayData {
  //   getData(): Promise<ProjectsData[]> {
  //     return Promise.resolve(ProjectsData);
  //   }
  projectsData = [
    {
      id: 1,
      name: "Project Na krso",
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

  get projects(): any {
    return this.projectsData;
  }

  projectById(num: number): any {
    // var item = this.projectsData.find(item => item.id === num);
    // return item;

    return this.projectsData.filter(function(a) {
      return a.id == num;
    })[0];
  }
}
