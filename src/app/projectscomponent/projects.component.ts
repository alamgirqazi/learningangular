import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { DisplayData } from "./data.service";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
  private projectsData: any;
  private a: any;
  constructor(
    private displayData: DisplayData,
    public authService: AuthService,
    public router: Router
  ) {}
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);

    // this.setMessage();
  }
  ngOnInit() {
    this.projectsData = this.displayData.projects;
    // this.a = this.displayData.apidata;
    // console.log(this.a);
  }
}
