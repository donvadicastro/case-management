import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {ActionModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-edit',
  templateUrl: './action-edit.component.html',
  styleUrls: ['./action-edit.component.scss']
})
export class ActionEditComponent extends AbstractEditComponent<ActionModel> {
  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('actions', fb.group({
      id: [''],
      parentId: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: [null],
      createdOn: [null],
    }), injector);
  }
}
