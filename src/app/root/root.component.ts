import {Component} from '@angular/core';
import {AuthService} from "../pages/auth/auth.service";
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  public routeUrl: string | null = null;

  get projectId(): string | null {
    return sessionStorage.getItem('projectId');
  }

  constructor(public authService: AuthService, public router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe((x: any) => this.routeUrl = x.url);
  }
}
