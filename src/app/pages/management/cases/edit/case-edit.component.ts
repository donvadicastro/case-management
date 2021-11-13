import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {CaseModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";
import {CustomValidators} from "../../../../shared/utils/validators/requiredIf";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss']
})
export class CaseEditComponent extends AbstractEditComponent<CaseModel> {
  actors: LookupModel[] = [];
  actions: LookupModel[] = [];
  entities: LookupModel[] = [];
  queries: LookupModel[] = [];
  functions: LookupModel[] = [];

  constructor(private fb: FormBuilder,
              private store: AngularFirestore,
              private activatedRoute: ActivatedRoute,
              injector: Injector) {

    super('cases', fb.group({
      id:           [''],
      parentId:     [''],
      actor:        [null, Validators.required],
      action:       [null, Validators.required],
      type:         ['', Validators.required],
      entity:       [null, CustomValidators.requiredIf('type', 'entity')],
      query:        [null, CustomValidators.requiredIf('type', 'query')],
      function:     [null, CustomValidators.requiredIf('type', 'function')],
      description:  [''],
      createdBy:    [null],
      createdOn:    [null],
    }), injector);

    this.loadDictionary('actors').subscribe(res => this.actors = res);
    this.loadDictionary('actions').subscribe(res => this.actions = res);
    this.loadDictionary('entities').subscribe(res => this.entities = res);
    this.loadDictionary('queries').subscribe(res => this.queries = res);
    this.loadDictionary('functions').subscribe(res => this.functions = res);

    this.editForm.get('type')?.valueChanges.subscribe(() =>
      this.editForm.patchValue({entity: null, query: null, function: null}));
  }
}
