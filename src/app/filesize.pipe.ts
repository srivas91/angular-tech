import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    var curdate=new Date();

    var diff=curdate.getFullYear()-value.getFullYear()
    return diff+"years";
    // return sdate.getFullYear();
    // return "hi vennila";
  }

}
