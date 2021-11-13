import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {PropertyModel} from "../model";

@Component({
  selector: 'app-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent extends AbstractListComponent<PropertyModel> {
  constructor(injector: Injector) { super('properties', injector); }
}
