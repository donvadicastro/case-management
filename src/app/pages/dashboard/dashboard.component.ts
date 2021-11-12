import {concat, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {tap} from "rxjs/operators";
import {ProjectModel} from "../management/projects/model";
import {CaseModel} from "../management/cases/model";
import {Component} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public loading = false;

  public projects$: Observable<ProjectModel[]>;
  public useCases$: Observable<CaseModel[]>;

  constructor(private store: AngularFirestore) {
    this.loading = true;

    this.projects$ = this.loadData('projects') as Observable<ProjectModel[]>;
    this.useCases$ = this.loadData('cases') as Observable<CaseModel[]>;

    concat(this.projects$, this.useCases$).pipe(tap(() => this.loading = false)).subscribe();
  }

  private loadData(collection: string):  Observable<any[]> {
    return this.store.collection(collection).valueChanges({idField: 'id'});
  }
}
