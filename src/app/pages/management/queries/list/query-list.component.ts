import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {QueryModel} from "../model";

@Component({
  selector: 'app-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent extends AbstractListComponent<QueryModel> {
  constructor(injector: Injector) { super('queries', injector); }
}
