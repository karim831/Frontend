import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, test:string): number {
    console.log(test);
    return Math.pow(value,2);
  }

}