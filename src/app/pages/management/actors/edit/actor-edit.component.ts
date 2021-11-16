import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {ActorModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";

@Component({
  selector: 'app-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.scss']
})
export class ActorEditComponent extends AbstractEditComponent<ActorModel> {
  projects: LookupModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('actors', fb.group({
      id: [''],
      parentId: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      createdBy: [null],
      createdOn: [null],
    }), injector);
  }
}
