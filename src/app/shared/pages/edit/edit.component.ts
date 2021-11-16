import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {EventEmitter, Inject, Injectable, Injector, OnInit} from "@angular/core";
import {BaseModel, LookupModel} from "../../entities/baseModel";
import {AuthService} from "../../../pages/auth/auth.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable()
export abstract class AbstractEditComponent<T extends BaseModel> implements OnInit {
  protected dataLoaded: EventEmitter<any> = new EventEmitter();

  protected constructor(@Inject(false) public collectionName: string,
                        public editForm: FormGroup,
                        protected injector: Injector) {
  }

  ngOnInit(): void {
    const activatedRoute = this.injector.get(ActivatedRoute);
    const store = this.injector.get(AngularFirestore);

    if (activatedRoute.snapshot.params['id']) {
      store
        .collection(this.collectionName)
        .doc(activatedRoute.snapshot.params['id'])
        .valueChanges({idField: 'id'})
        .subscribe(doc => {
          doc && this.editForm.setValue(doc);
          this.dataLoaded.emit(doc);
        });
    } else {
      this.dataLoaded.emit(null);
    }
  }

  onSubmit() {
    const activatedRoute = this.injector.get(ActivatedRoute);
    const router = this.injector.get(Router);
    const store = this.injector.get(AngularFirestore);
    const authService = this.injector.get(AuthService);

    const id = activatedRoute.snapshot.params['id'];
    const parentId =activatedRoute.parent?.snapshot.params['id'];

    const data = <BaseModel>this.editForm.value;
    const user = {id: authService.currentUser?.uid, name: authService.currentUser?.displayName};

    if (id) {
      store.collection(this.collectionName).doc(id).update(data).then(() =>
        router.navigate([".."], { relativeTo: activatedRoute }));
    } else {
      parentId && (data.parentId = parentId);

      store.collection(this.collectionName).add({...data, createdOn: new Date().getTime(), createdBy: user}).then(() =>
        router.navigate([".."], { relativeTo: activatedRoute }));
    }
  }

  public compareLookupItems(item1: LookupModel, item2: LookupModel) {
    return item1?.id === item2?.id;
  }

  public onGroupCheckChange(control: string, collection: LookupModel[], event: any) {
    const currentValue: LookupModel[] = this.editForm.get(control)?.value;

    if(event.target.checked) {
      let entity = <LookupModel>collection.find(x => x.id === event.target.value);
      currentValue.push({id: entity.id, name: entity.name});
    } else {
      currentValue.splice(currentValue.findIndex(x => x.id === event.target.value), 1);
    }
  }

  public isGroupCheckChecked(control: string, value: LookupModel) {
    return !!this.editForm.get(control)?.value.find((x: LookupModel) => x.id === value.id);
  }

  protected loadDictionary<T extends LookupModel>(dictionaryName: string, parentId?: string): Observable<T[]> {
    const store = this.injector.get(AngularFirestore);
    const id = parentId || sessionStorage.getItem('projectId');
    const collection = store.collection(dictionaryName, query => query.where('parentId', '==', id));

    // return collection.get().pipe(
    //   map((x: any) => x.docs),
    //   map((x: any) => x.map((y: any) => ({...y.data(), id: y.id})))
    // );
    return collection.valueChanges({idField: 'id'}).pipe(map((x: any) => x));
  }
}
