import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

interface ItemsResponse {
  results: {};
}

@Injectable()
export class DisplayData {
  public apidata: any = [
    {
      id: "",
      login: ""
    }
  ];
  public jsonapidata: any = [
    {
      id: "",
      body: "",
      title: ""
    }
  ];
  public url: any;
  constructor(private http: HttpClient) {}
  projectsData = [
    {
      id: 1,
      name: "Project Evolve",
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
  dataFromApi(): any {
    this.http
      .get("https://api.github.com/users/alamgirqazi")
      .subscribe(data => {
        this.apidata = data;
        return this.apidata;
      });
    return this.apidata;
  }

  dataFromJsonPlaceholder(num): Observable<any> {
    this.url = "https://jsonplaceholder.typicode.com/posts/" + num;

    return this.http.get(this.url).map(data => {
      // Read the result field from the JSON response.
      // console.log(data);
      return data;
    });
  }
  // return this.http.get(this.url).subscribe(data => {
  //   // Read the result field from the JSON response.
  //   this.jsonapidata = data;
  //   console.log(this.jsonapidata);

  //   return data;
  // });

  // console.log("url", this.url);
  // this.http.get(this.url).subscribe(
  //   data => {
  //     console.log(data);
  //     return data;
  //   },
  //   err => {
  //     console.log("Error occured.");
  //   }
  // );
  // return this.jsonapidata;
}
