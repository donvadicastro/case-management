import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './root/root.component';
import {environment} from '../environments/environment';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {SignInComponent} from './pages/auth/sign-in/sign-in.component';
import {SignUpComponent} from './pages/auth/sign-up/sign-up.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from './pages/auth/profile/profile.component';
import {ProjectEditComponent} from "./pages/management/projects/edit/project-edit.component";
import {ProjectListComponent} from "./pages/management/projects/list/project-list.component";
import {CaseListComponent} from "./pages/management/cases/list/case-list.component";
import {CaseEditComponent} from "./pages/management/cases/edit/case-edit.component";
import {AutoCompleteModule} from "primeng/autocomplete";

@NgModule({
  declarations: [
    RootComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProfileComponent,
    CaseListComponent,
    CaseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideDatabase(() => getDatabase()),
    AngularFirestoreModule,

    ReactiveFormsModule,
    FormsModule,

    AutoCompleteModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
