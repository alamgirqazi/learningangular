import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "FilterSearch" })
export class FilterPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    if (!values || !values.length) return [];
    if (!filter) return values;

    return values.filter(v => v.body.indexOf(filter) >= 0);
  }
}
