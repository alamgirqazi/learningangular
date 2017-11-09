import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

@Injectable()
export class LazyService {
  public url: any;
  private messageSource = new BehaviorSubject<string>("default message");
  private subject = new Subject<string>();
  //   value = this.subject;

  public mysubject = new Subject();

  value = this.subject.asObservable();
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  setValue(val: string) {
    // this.value.a
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
