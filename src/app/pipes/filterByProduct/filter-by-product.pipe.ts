import {Pipe, PipeTransform} from '@angular/core';
import {CaseModel} from "../../pages/management/cases/model";

@Pipe({
  name: 'filterByProject'
})
export class FilterByProjectPipe implements PipeTransform {
  transform(value: CaseModel[] | null, projectId: string): CaseModel[] {
    return value?.filter(x => x.project?.id === projectId) || [];
  }
}
