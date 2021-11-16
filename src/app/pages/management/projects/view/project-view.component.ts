import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectEditComponent} from "../edit/project-edit.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent extends ProjectEditComponent implements OnInit, OnDestroy {
  private readonly sessionKey = 'projectId';

  ngOnInit() {
    super.ngOnInit();

    const activatedRoute = this.injector.get(ActivatedRoute);
    sessionStorage.setItem(this.sessionKey, activatedRoute.snapshot.params['id']);
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem(this.sessionKey);
  }
}
