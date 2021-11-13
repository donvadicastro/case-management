import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {BaseModel} from "../../entities/baseModel";
import {tap} from "rxjs/operators";

export abstract class AbstractListComponent<T extends BaseModel> {
  public loading = false;
  public entities: Observable<T[]>;

  protected constructor(protected collectionName: string, protected store: AngularFirestore) {
    this.loading = true;

    this.entities = this.bindCollection().valueChanges({idField: 'id'}) as Observable<T[]>
    this.entities.pipe(tap(() => this.loading = false)).subscribe();
  }

  protected bindCollection() {
    return this.store.collection(this.collectionName);
  }

  public onDelete(id: string) {
    this.store.collection(this.collectionName).doc(id).delete();
  }
}
