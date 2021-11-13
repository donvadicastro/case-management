import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {BaseModel} from "../../entities/baseModel";
import {tap} from "rxjs/operators";
import {Injector} from "@angular/core";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore/collection/collection";
import {ActivatedRoute} from "@angular/router";

export abstract class AbstractListComponent<T extends BaseModel> {
  private collection: AngularFirestoreCollection<T>;

  public loading = false;
  public entities: Observable<T[]>;

  protected constructor(collectionName: string, injector: Injector) {
    const store = injector.get(AngularFirestore);
    const parentId = injector.get(ActivatedRoute).parent?.snapshot.params['id'];

    this.loading = true;
    this.collection = parentId ?
      store.collection(collectionName, query => query.where('parentId', '==', parentId)) :
      store.collection(collectionName);

    this.entities = this.collection.valueChanges({idField: 'id'}) as Observable<T[]>
    this.entities.pipe(tap(() => this.loading = false)).subscribe();
  }

  public onDelete(id: string) {
    this.collection.doc(id).delete();
  }
}
