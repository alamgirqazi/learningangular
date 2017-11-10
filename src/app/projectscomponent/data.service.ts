import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

interface InterfaceSearchItem {
  // results: {};
  id: number;
  title: string;
  body: string;
}
@Injectable()
export class DisplayData {
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
  sampleurl: string;

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
    return this.http.get("https://api.github.com/users/alamgirqazi");
  }

  dataFromJsonPlaceholder(num): Observable<any> {
    this.url = "https://jsonplaceholder.typicode.com/posts/" + num;

    return this.http.get(this.url);
  }
  async dataFromJsonPlaceholderTwo(num): Promise<any> {
    this.url = "https://jsonplaceholder.typicode.com/posts/" + num + 2;
    const response = await this.http
      .get<InterfaceSearchItem>(this.url)
      .toPromise();
    console.log(response);
    return response;
  }

  async getPosts(): Promise<any> {
    const result = await this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .toPromise();
    console.log("result");
    console.log(result);
    return result;
  }
}
