import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {BaseModel} from "../../entities/baseModel";
import {tap} from "rxjs/operators";

export abstract class AbstractListComponent<T extends BaseModel> {
  public loading = false;
  public entities: Observable<T[]>;

  protected constructor(private collectionName: string, private store: AngularFirestore) {
    this.loading = true;

    this.entities = this.store.collection(this.collectionName).valueChanges({idField: 'id'}) as Observable<T[]>
    this.entities.pipe(tap(() => this.loading = false)).subscribe();
  }

  public onDelete(id: string) {
    this.store.collection(this.collectionName).doc(id).delete();
  }
}
