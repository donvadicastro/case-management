import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {EntityModel} from "../model";

@Component({
  selector: 'app-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent extends AbstractListComponent<EntityModel> {
  constructor(injector: Injector) { super('entities', injector); }
}
