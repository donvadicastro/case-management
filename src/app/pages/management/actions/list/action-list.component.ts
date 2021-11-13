import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ActionModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent extends AbstractListComponent<ActionModel> {
  constructor(injector: Injector) { super('actions', injector); }
}
