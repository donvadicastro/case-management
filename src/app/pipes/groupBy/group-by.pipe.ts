import {Pipe, PipeTransform} from '@angular/core';
import {get} from 'object-path';


@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(collection: any[] | null, field: string): {[key: string]: any} {
    return (collection || []).reduce((rv, x) => {
      let val = get(x, field);
      val && (rv[val] = rv[val] || []).push(x);

      return rv;
    }, {});
  }
}
