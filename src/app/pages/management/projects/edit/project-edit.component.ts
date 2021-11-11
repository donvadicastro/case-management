import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {ProjectModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent extends AbstractEditComponent<ProjectModel> {
  constructor(private fb: FormBuilder, injector: Injector) {
    super('projects', fb.group({
      id: [''],
      name: ['', Validators.required],
      createdBy: [{}],
      createdOn: [''],
    }), injector);
  }
}
