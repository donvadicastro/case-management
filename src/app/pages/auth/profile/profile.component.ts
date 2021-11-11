import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-me',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    displayName: [{value: '', disabled: true}, Validators.required],
    email: [{value: '', disabled: true}, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private store: AngularFirestore,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.authStateChanged$.subscribe(x => x && this.profileForm.patchValue(x.toJSON()));
  }
}
