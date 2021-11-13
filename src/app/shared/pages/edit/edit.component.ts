import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Inject, Injectable, Injector, OnInit} from "@angular/core";
import {BaseModel, LookupModel} from "../../entities/baseModel";
import {AuthService} from "../../../pages/auth/auth.service";
import {map} from "rxjs/operators";

@Injectable()
export abstract class AbstractEditComponent<T extends BaseModel> implements OnInit {
  protected constructor(@Inject(false) public collectionName: string,
                        public editForm: FormGroup,
                        private injector: Injector) {
  }

  ngOnInit(): void {
    const activatedRoute = this.injector.get(ActivatedRoute);
    const store = this.injector.get(AngularFirestore);

    if (activatedRoute.snapshot.params['id']) {
      store
        .collection(this.collectionName)
        .doc(activatedRoute.snapshot.params['id'])
        .valueChanges({idField: 'id'})
        .subscribe(doc => doc && this.editForm.setValue(doc));
    }
  }

  onSubmit() {
    const activatedRoute = this.injector.get(ActivatedRoute);
    const router = this.injector.get(Router);
    const store = this.injector.get(AngularFirestore);
    const authService = this.injector.get(AuthService);

    const id = activatedRoute.snapshot.params['id'];
    const data = <BaseModel>this.editForm.value;
    const user = {id: authService.currentUser?.uid, name: authService.currentUser?.displayName};

    if (id) {
      store.collection(this.collectionName).doc(id).update(data).then(() =>
        router.navigate([".."], { relativeTo: activatedRoute }));
    } else {
      store.collection(this.collectionName).add({...data, createdOn: new Date().getTime(), createdBy: user}).then(() =>
        router.navigate([".."], { relativeTo: activatedRoute }));
    }
  }

  public compareLookupItems(item1: LookupModel, item2: LookupModel) {
    return item1?.id === item2?.id;
  }

  protected loadDictionary(dictionaryName: string) {
    const store = this.injector.get(AngularFirestore);

    return store.collection(dictionaryName).valueChanges({idField: 'id'})
      .pipe(map(changes => changes.map(((x: any) => ({id: x.id, name: x.name})))));
  }
}
