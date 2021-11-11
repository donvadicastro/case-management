import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {CaseModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent extends AbstractListComponent<CaseModel> {
  constructor(store: AngularFirestore) { super('cases', store); }
}
