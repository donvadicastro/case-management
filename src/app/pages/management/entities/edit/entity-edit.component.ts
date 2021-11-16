import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {EntityModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.scss']
})
export class EntityEditComponent extends AbstractEditComponent<EntityModel> {
  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('entities', fb.group({
      id:           [''],
      parentId:     [''],
      name:         ['', Validators.required],
      description:  [''],
      createdBy:    [null],
      createdOn:    [null],
    }), injector);
  }
}
