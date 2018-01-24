import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { DisplayData } from "./data.service";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent implements OnInit {
  projectsData: Observable<any>;
  // private projectsData: any;
  private a: any;
  constructor(
    private displayData: DisplayData,
    public authService: AuthService,
    public router: Router
  ) {}
  logout() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.projectsData = this.displayData.projects;
    // this.a = this.displayData.apidata;
    // console.log(this.a);
  }
}
