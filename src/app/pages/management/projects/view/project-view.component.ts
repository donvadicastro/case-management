import {Component} from '@angular/core';
import {ProjectEditComponent} from "../edit/project-edit.component";

@Component({
  selector: 'app-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent extends ProjectEditComponent {
}
