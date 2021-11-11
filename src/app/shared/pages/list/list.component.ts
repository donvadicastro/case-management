import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {BaseModel} from "../../entities/baseModel";

export abstract class AbstractListComponent<T extends BaseModel> {
  public entities: Observable<T[]>;

  protected constructor(private collectionName: string, private store: AngularFirestore) {
    this.entities = this.store.collection(this.collectionName).valueChanges({idField: 'id'}) as Observable<T[]>
  }

  public onDelete(id: string) {
    this.store.collection(this.collectionName).doc(id).delete();
  }
}
