import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ActorModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent extends AbstractListComponent<ActorModel> {
  constructor(store: AngularFirestore) { super('actors', store); }
}
