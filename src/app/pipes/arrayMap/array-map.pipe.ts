import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayMap'
})
export class ArrayMapPipe implements PipeTransform {

  transform(value: any[], field: string): unknown {
    return value.map(x => x[field]);
  }
}
