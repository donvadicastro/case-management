import { Component } from '@angular/core';
import {AuthService} from "../pages/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor(public authService: AuthService) {}
}
