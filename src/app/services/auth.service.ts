import { Injectable } from "@angular/core";

import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { SDKToken } from "./models/BaseModels";
// interface InterfaceUserAuth{
import { HttpClient } from "@angular/common/http";
import { StorageBrowser } from "./storage.browser";
import { CookieBrowser } from "./cookiestorage.browser";
// }
@Injectable()
export class Auth0Service {
  time;
  constructor(
    protected http: HttpClient,
    protected browser: StorageBrowser,
    protected cookieBrowser: CookieBrowser
  ) {}
  private token: SDKToken = new SDKToken();

  public async initializer() {
    const results = await Promise.all([
      this.load("id"),
      // this.load("user"),
      this.load("userId"),
      // this.load("issuedAt"),
      // this.load("created"),
      this.load("ttl"),
      this.load("rememberMe")
    ]);
    this.token.id = results[0];
    // this.token.user = results[1];
    this.token.userId = results[1];
    // this.token.issuedAt = results[3];
    this.token.created = results[2];
    this.token.ttl = results[3];
    this.token.rememberMe = results[4];
  }
  public getToken(): SDKToken {
    return this.token as SDKToken; // Type assertion
    // return <SDKToken>this.token;
  }

  getId() {
    return this.token.id;
  }

  public save() {
    if (this.token.rememberMe) {
      this.persist("id", this.token.id);
      // this.persist("user", this.token.user);
      this.persist("userId", this.token.userId);
      // this.persist("issuedAt", this.token.issuedAt);
      this.persist("created", this.token.created);
      this.persist("ttl", this.token.ttl);
      this.persist("rememberMe", this.token.rememberMe);
      return true;
    } else {
      this.persistCookie("id", this.token.id);
      // this.persistCookie("user", this.token.user);
      this.persistCookie("userId", this.token.userId);
      // this.persistCookie("issuedAt", this.token.issuedAt);
      this.persistCookie("created", this.token.created);
      this.persistCookie("ttl", this.token.ttl);

      return false;
    }
  }
  public setToken(token: SDKToken): void {
    this.token = Object.assign(this.token, token);
    // console.log("this.token");
    // console.log(this.token);
    this.save();
  }
  protected async load(prop: string): Promise<any> {
    return await this.browser.get(`${prop}`);
  }
  protected persist(prop: string, value: any): void {
    try {
      this.browser.set(
        `${prop}`,
        typeof value === "object" ? JSON.stringify(value) : value
      );
    } catch (err) {
      console.error("Cannot access local/session storage:", err);
    }
  }
  protected persistCookie(prop: string, value: any): void {
    try {
      this.cookieBrowser.set(
        `${prop}`,
        typeof value === "object" ? JSON.stringify(value) : value
      );
    } catch (err) {
      console.error("Cannot access local/session storage:", err);
    }
  }
  public getAccessTokenId(): string {
    return this.token.id;
  }
  // public getAccessTokenId(): string {
  //   return this.token.id;
  // }
}
