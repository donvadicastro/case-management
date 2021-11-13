import {Component, Injector} from '@angular/core';
import {CaseModel} from "../model";
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";

@Component({
  selector: 'app-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent extends AbstractListComponent<CaseModel> {
  constructor(injector: Injector) { super('cases', injector); }
}
