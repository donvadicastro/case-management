import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {FunctionModel} from "../model";

@Component({
  selector: 'app-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.scss']
})
export class FunctionListComponent extends AbstractListComponent<FunctionModel> {
  constructor(injector: Injector) { super('functions', injector); }
}
