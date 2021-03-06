import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DisplayData } from "./data.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

interface IPlaceholder {
  id?: number;
  title?: string;
  body?: string;
}

@Component({
  selector: "app-projectdetails",
  templateUrl: "./details.component.html"
})
export class ProjectDetailsComponent implements OnInit {
  public routeId: number;
  public projectsData: any;
  // public jsonPlaceholder: any;
  public jsonPlaceholder = {
    id: "",
    title: "",
    body: ""
  };
  subscription: Subscription;
  // jsonPlaceholderTwo?: IPlaceholder;

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

      this.displayData.dataFromJsonPlaceholder(this.routeId).subscribe(
        data => {
          console.log("Login successful");
        },
        err => {
          console.log("Something went wrong! Login not successful");
        }
      );

      //   this.subscription = this.displayData
      //     .dataFromJsonPlaceholder(this.routeId)
      //     .subscribe(message => {
      //       this.jsonPlaceholderTwo = message;
      //     });
      this.getPostData();
      this.holderTwo();
    });
  }
  async getPostData() {
    const res = await this.displayData.getPosts();
  }

  async holderTwo() {
    this.jsonPlaceholderTwo = await this.displayData.dataFromJsonPlaceholderTwo(
      this.routeId
    );
  }
}
