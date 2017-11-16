// /* tslint:disable */
// import { Injectable, Inject, Optional } from "@angular/core";
// // import { Http, Headers, Request, RequestOptions } from '@angular/http';
// import { NgModule, ModuleWithProviders } from "@angular/core";
// import { JSONSearchParams } from "./search.params";
// import { ErrorHandler } from "./error.service";
// import { LoopBackAuth, Auth0Service } from "./auth.service";
// import { LoopBackConfig } from "../../lb.config";
// import { LoopBackFilter, AccessToken } from "../../models/BaseModels";
// // import { SDKModels } from './models/BaseModels/BaseModels';
// import { Observable } from "rxjs/Observable";
// import { Subject } from "rxjs/Subject";
// import { ErrorObservable } from "rxjs/observable/ErrorObservable";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";
// import { HttpClient } from "@angular/common/http";
// import { RequestOptions, Http } from "@angular/http";
// // Making Sure EventSource Type is available to avoid compilation issues.
// declare var EventSource: any;
// /**
// * @module BaseLoopBackApi
// * @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
// * @author Nikolay Matiushenkov <https://github.com/mnvx>
// * @license MIT
// * @description
// * Abstract class that will be implemented in every custom service automatically built
// * by the sdk builder.
// * It provides the core functionallity for every API call, either by HTTP Calls or by
// * WebSockets.
// **/
// @Injectable()
// export abstract class BaseService {
//   protected path: string;
//   protected model: any;

//   constructor(
//     protected http: Http,
//     // protected models: SDKModels,
//     protected auth0: Auth0Service,
//     protected searchParams: JSONSearchParams // @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
//   ) {
//     // this.model = this.models.get(this.getModelName());
//   }

//   public request(
//     method: string,
//     url: string,
//     routeParams: any = {},
//     urlParams: any = {},
//     postBody: any = {}
//   ): Observable<any> {
//     // Headers to be sent
//     let headers: Headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     // Authenticate request
//     this.authenticate(url, headers);
//     // Transpile route variables to the actual request Values
//     Object.keys(routeParams).forEach((key: string) => {
//       url = url.replace(
//         new RegExp(":" + key + "(/|$)", "g"),
//         routeParams[key] + "$1"
//       );
//     });
//     // Body fix for built in remote methods using "data", "options" or "credentials
//     // that are the actual body, Custom remote method properties are different and need
//     // to be wrapped into a body object
//     let body: any;
//     let postBodyKeys =
//       typeof postBody === "object" ? Object.keys(postBody) : [];
//     if (postBodyKeys.length === 1) {
//       body = postBody[postBodyKeys.shift()];
//     } else {
//       body = postBody;
//     }
//     // Separate filter object from url params and add to search query
//     if (urlParams.filter) {
//       headers.append("filter", JSON.stringify(urlParams.filter));
//       delete urlParams.filter;
//     }

//     this.searchParams.setJSON(urlParams);
//     let request: Request = new Request(
//       new RequestOptions({
//         headers: headers,
//         method: method,
//         url: url,
//         search:
//           Object.keys(urlParams).length > 0
//             ? this.searchParams.getURLSearchParams()
//             : null,
//         body: body ? JSON.stringify(body) : undefined
//       })
//     );
//     return this.http
//       .request(request)
//       .map((res: any) => (res.text() != "" ? res.json() : {}))
//       .catch(e => console.log("error"));
//     // .catch((e) => this.errorHandler.handleError(e));
//   }

//   public authenticate<T>(url: string, headers: Headers): void {
//     if (this.auth0.getAccessTokenId()) {
//       headers.append(
//         "Authorization",
//         LoopBackConfig.getAuthPrefix() + this.auth0.getAccessTokenId()
//       );
//     }
//   }
// }
