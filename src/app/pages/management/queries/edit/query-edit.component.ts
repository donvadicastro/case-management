import {Component, Injector} from '@angular/core';
import {AbstractEditComponent} from "../../../../shared/pages/edit/edit.component";
import {QueryModel} from "../model";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {LookupModel} from "../../../../shared/entities/baseModel";
import {PropertyModel} from "../../properties/model";

@Component({
  selector: 'app-edit',
  templateUrl: './query-edit.component.html',
  styleUrls: ['./query-edit.component.scss']
})
export class QueryEditComponent extends AbstractEditComponent<QueryModel> {
  projects: LookupModel[] = [];
  entities: LookupModel[] = [];
  properties: PropertyModel[] = [];

  constructor(private fb: FormBuilder, private store: AngularFirestore, injector: Injector) {
    super('queries', fb.group({
      id: [''],
      parentId: [''],
      name: ['', Validators.required],
      from: [null, Validators.required],
      select: [[]],
      where: ['', Validators.required],
      description: [''],
      createdBy: [null],
      createdOn: [null],
    }), injector);
  }

  ngOnInit() {
    this.dataLoaded.subscribe((data) => {
      // listen for changes for "from" field to reload "properties"
      this.editForm.get('from')?.valueChanges.subscribe((from) => {
        this.editForm.get('select')?.setValue([]);
        this.loadProperties(from.id);
      });

      // initialize default list for saved data
      data && this.loadProperties(data.from.id);
    });

    super.ngOnInit();
    this.loadDictionary('entities').subscribe(res => this.entities = res);
  }

  private loadProperties(parentId: string) {
    this.loadDictionary<PropertyModel>('properties', parentId).subscribe(res => this.properties = res);
  }
}
