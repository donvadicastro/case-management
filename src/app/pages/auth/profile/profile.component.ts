import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-me',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  production = environment.production;

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

  onRemoveCleanUp() {
    if(window.confirm('Clean-up all documents?')) {
      Promise.all([
        this.store.collection('projects').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('cases').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('actors').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('actions').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('entities').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('queries').ref.get().then(list => list.forEach(x => x.ref.delete())),
        this.store.collection('functions').ref.get().then(list => list.forEach(x => x.ref.delete()))
      ]).then(() => window.alert('Completed'));
    }
  }
}
