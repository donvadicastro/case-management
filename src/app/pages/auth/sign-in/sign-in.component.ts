import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) {
    const redirectTo = this.parseRedirectUrl();

    this.authService.authStateChanged$.subscribe((user) =>
      user && this.router.navigate(
        redirectTo?.url ? [redirectTo.url] : ['/'],
        redirectTo?.queryParams ? {queryParams: redirectTo.queryParams} : {}));
  }

  private parseRedirectUrl(): {url: string, queryParams?: {[key: string]: string}} | null {
    const queryParam = this.route.snapshot.queryParams['redirectTo'],
      redirectTo = queryParam && decodeURIComponent(queryParam),
      parts = redirectTo && redirectTo.split('?'),
      httpParams = parts && parts.length > 1 && new HttpParams({fromString: parts[1]});

    return httpParams ? {
      url: parts[0],
      queryParams: this.buildQueryParams(httpParams)
    } : redirectTo ? { url: parts[0] } : null;
  }

  private buildQueryParams(params: HttpParams): {[key: string]: string} {
    return params.keys().reduce((prev: {[key: string]: string} , x) => {
      const value = params.get(x);

      if (value) {
        prev[x] = value;
      }

      return prev;
    }, {});
  }
}
