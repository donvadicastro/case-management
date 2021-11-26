import {concat, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {tap} from "rxjs/operators";
import {ProjectModel} from "../management/projects/model";
import {CaseModel} from "../management/cases/model";
import {Component} from "@angular/core";
import {QueryFn} from "@angular/fire/compat/firestore/interfaces";

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

    this.useCases$ = this.loadData('cases') as Observable<CaseModel[]>;
    this.projects$ = this.loadData('projects',
        query => query.where('isTemplate', '==', true)) as Observable<ProjectModel[]>;

    concat(this.projects$, this.useCases$).pipe(tap(() => this.loading = false)).subscribe();
  }

  private loadData(collection: string, query?: QueryFn):  Observable<any[]> {
    return this.store.collection(collection, query).valueChanges({idField: 'id'});
  }
}
