import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  production = environment.production;

  constructor(public authService: AuthService) { }
}
