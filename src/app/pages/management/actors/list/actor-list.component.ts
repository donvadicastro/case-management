import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ActorModel} from "../model";

@Component({
  selector: 'app-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent extends AbstractListComponent<ActorModel> {
  constructor(injector: Injector) { super('actors', injector); }
}
