import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {QueryModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";

@Component({
  selector: 'app-edit',
  templateUrl: './query-edit.component.html',
  styleUrls: ['./query-edit.component.scss']
})
export class QueryEditComponent extends AbstractEditComponent<QueryModel> {
  projects: LookupModel[] = [];
  entities: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('queries', fb.group({
      id: [''],
      name: ['', Validators.required],
      from: [null, Validators.required],
      select: ['', Validators.required],
      where: ['', Validators.required],
      description: [''],
      createdBy: [null],
      createdOn: [null],
    }), injector);

    this.loadDictionary('entities').subscribe(res => this.entities = res);
  }
}
