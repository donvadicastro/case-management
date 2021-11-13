import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {PropertyModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";
import {CustomValidators} from "../../../../shared/utils/validators/requiredIf";

@Component({
  selector: 'app-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent extends AbstractEditComponent<PropertyModel> {
  projects: LookupModel[] = [];
  entities: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('properties', fb.group({
      id:           [''],
      name:         ['', Validators.required],
      type:         ['', Validators.required],
      formula:      ['', CustomValidators.requiredIf('type', 'calculated')],
      reference:    [null, CustomValidators.requiredIf('type', 'reference')],
      description:  [''],
      createdBy:    [null],
      createdOn:    [null],
    }), injector);

    this.loadDictionary('entities').subscribe(res => this.entities = res);

    this.editForm.get('type')?.valueChanges.subscribe(() =>
      this.editForm.patchValue({formula: null, reference: null}));
  }
}
