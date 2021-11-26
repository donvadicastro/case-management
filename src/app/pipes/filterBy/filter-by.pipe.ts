import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(list: any[] | null, field: string, value: any): any[] {
    return list?.filter(x => x[field] === value) || [];
  }
}
