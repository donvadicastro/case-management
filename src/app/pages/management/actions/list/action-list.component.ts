import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ActionModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent extends AbstractListComponent<ActionModel> {
  constructor(store: AngularFirestore) { super('actions', store); }
}
