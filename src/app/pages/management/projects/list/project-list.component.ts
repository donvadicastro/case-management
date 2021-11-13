import {Component, Injector} from '@angular/core';
import {AbstractListComponent} from "../../../../shared/pages/list/list.component";
import {ProjectModel} from "../model";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent extends AbstractListComponent<ProjectModel>{
  constructor(injector: Injector) { super('projects', injector); }
}
