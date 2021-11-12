import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {FunctionModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.scss']
})
export class FunctionListComponent extends AbstractListComponent<FunctionModel> {
  constructor(store: AngularFirestore) { super('functions', store); }
}
