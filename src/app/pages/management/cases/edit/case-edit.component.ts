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

    this.dataLoaded.subscribe(() => this.editForm.get('type')?.valueChanges.subscribe(() =>
      this.editForm.patchValue({entity: null, query: null, function: null})));
  }

  ngOnInit() {
    super.ngOnInit();

    this.loadDictionary('actors').subscribe(res => {
      this.actors = res;

      const entity = this.actors.find(x => x.name === this.activatedRoute.snapshot.queryParams['actor']);
      entity && this.editForm.patchValue({ actor: CaseEditComponent.convertLookup(entity)});
    });

    this.loadDictionary('actions').subscribe(res => {
      this.actions = res;

      const entity = this.actions.find(x => x.name === this.activatedRoute.snapshot.queryParams['action']);
      entity && this.editForm.patchValue({ action: CaseEditComponent.convertLookup(entity)});
    });

    this.loadDictionary('entities').subscribe(res => {
      this.entities = res;

      const entity = this.entities.find(x => x.name === this.activatedRoute.snapshot.queryParams['entity']);
      entity && this.editForm.patchValue({ type: 'entity', entity: CaseEditComponent.convertLookup(entity)});
    });

    this.loadDictionary('queries').subscribe(res => {
      this.queries = res;

      const entity = this.queries.find(x => x.name === this.activatedRoute.snapshot.queryParams['query']);
      entity && this.editForm.patchValue({ type: 'query', query: CaseEditComponent.convertLookup(entity)});
    });

    this.loadDictionary('functions').subscribe(res => {
      this.functions = res;

      const entity = this.functions.find(x => x.name === this.activatedRoute.snapshot.queryParams['function']);
      entity && this.editForm.patchValue({ type: 'function', function: CaseEditComponent.convertLookup(entity)});
    });
  }

  checkSelected(param: string, value?: string): boolean {
    return this.activatedRoute.snapshot.queryParams[param] === value;
  }

  onChange() {
    const data: CaseModel = this.editForm.getRawValue();

    if (data.actor?.name && data.action?.name && (data.entity?.name || data.query?.name || data.function?.name)) {
      this.editForm.get('description')?.setValue(`${data.actor.name} ${data.action.name} ${data.entity?.name || data.query?.name || data.function?.name}`);
    }
  }

  private static convertLookup(entity: LookupModel): LookupModel {
    return {id: entity.id, name: entity.name};
  }
}
