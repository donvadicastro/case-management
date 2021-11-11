import {Component} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ProjectModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent extends AbstractListComponent<ProjectModel>{
  constructor(store: AngularFirestore) { super('projects', store); }
}
