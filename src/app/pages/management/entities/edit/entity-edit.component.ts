import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {EntityModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";

@Component({
  selector: 'app-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.scss']
})
export class EntityEditComponent extends AbstractEditComponent<EntityModel> {
  projects: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('entities', fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: [null],
      createdOn: [null],
    }), injector);
  }
}
