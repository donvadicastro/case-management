import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {CaseModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import {LookupModel} from "../../../../shared/entities/baseModel";

@Component({
  selector: 'app-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss']
})
export class CaseEditComponent extends AbstractEditComponent<CaseModel> {
  projects: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('cases', fb.group({
      id: [''],
      project: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: [null],
      createdOn: [null],
    }), injector);

    store.collection('projects').valueChanges({idField: 'id'})
      .pipe(map(changes => changes.map(((x: any) => ({id: x.id, name: x.name })))))
      .subscribe(res => this.projects = res);
  }
}
