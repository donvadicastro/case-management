import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(public authService: AuthService, private router: Router) {
    this.authService.authStateChanged$.subscribe((user) => user && this.router.navigate(['/']));
  }
}
