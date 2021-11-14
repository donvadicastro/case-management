import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {FunctionModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";

@Component({
  selector: 'app-edit',
  templateUrl: './function-edit.component.html',
  styleUrls: ['./function-edit.component.scss']
})
export class FunctionEditComponent extends AbstractEditComponent<FunctionModel> {
  projects: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('functions', fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      return: fb.group({
        type: ['list', Validators.required],
        default: [null]
      }),
      createdBy: [null],
      createdOn: [null],
    }), injector);
  }
}
