import {Component, OnInit} from '@angular/core';
import {CaseModel} from "../model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  public loading = false;
  public entities: CaseModel[] = [];

  constructor(private store: AngularFirestore, private activatedRoute: ActivatedRoute) {
  }

  public onDelete(id: string) {
    this.store.collection('cases').doc(id).delete();
  }

  ngOnInit(): void {
    this.loading = true;

    const entities$ = this.store.collection('cases',
        query => query.where('parentId', '==', this.activatedRoute.parent?.snapshot.params['id']))
      .valueChanges({idField: 'id'}) as Observable<CaseModel[]>

    entities$.pipe(tap(() => this.loading = false)).subscribe(res => this.entities = res);
  }
}
