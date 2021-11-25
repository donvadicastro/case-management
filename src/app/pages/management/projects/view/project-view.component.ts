import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ProjectEditComponent} from "../edit/project-edit.component";
import {ActivatedRoute} from "@angular/router";
import {LookupModel} from "../../../../shared/entities/baseModel";
import {ProjectModel} from "../model";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import {AuthService} from "../../../auth/auth.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent extends ProjectEditComponent implements OnInit, OnDestroy {
  private readonly sessionKey = 'projectId';

  templates: LookupModel[] = [];
  selectedTemplate: ProjectModel | null = null;

  constructor(fb: FormBuilder, injector: Injector,
              private store: AngularFirestore,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) {

    super(fb, injector);
  }

  ngOnInit() {
    super.ngOnInit();

    const activatedRoute = this.injector.get(ActivatedRoute);
    sessionStorage.setItem(this.sessionKey, activatedRoute.snapshot.params['id']);

    this.loadTemplates()
      .subscribe(res => this.templates = res.filter((x => (<ProjectModel>x).isTemplate)));
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem(this.sessionKey);
  }

  onImport() {
    if (this.selectedTemplate && window.confirm(`All resources from project "${this.selectedTemplate?.name}" will be imported into active`)) {
      const user = {id: this.authService.currentUser?.uid, name: this.authService.currentUser?.displayName};
      const projectId = this.activatedRoute.snapshot.params['id'];
      const templateId = this.selectedTemplate?.id;
      const metaInfo = {createdOn: new Date().getTime(), createdBy: user, parentId: projectId};

      this.loadDictionary('cases', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('cases').add({...x, ...metaInfo})));

      this.loadDictionary('actors', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('actors').add({...x, ...metaInfo})));

      this.loadDictionary('actions', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('actions').add({...x, ...metaInfo})));

      this.loadDictionary('entities', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('entities').add({...x, ...metaInfo}).then(y =>
          this.loadDictionary('properties', x.id).subscribe(res => res.forEach(z =>
            this.store.collection('properties').add({...z, ...metaInfo, parentId: y.id}))))));

      this.loadDictionary('queries', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('queries').add({...x, ...metaInfo})));

      this.loadDictionary('functions', templateId).subscribe(res => res.forEach(x =>
        this.store.collection('functions').add({...x, ...metaInfo})));
    }
  }

  protected loadTemplates<T extends LookupModel>(): Observable<T[]> {
    const store = this.injector.get(AngularFirestore);
    const collection = store.collection('projects', query => query.where('isTemplate', '==', true));

    return collection.valueChanges({idField: 'id'}).pipe(map((x: any) => x));
  }
}
