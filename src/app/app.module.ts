import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './root/root.component';
import {environment} from '../environments/environment';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {SignInComponent} from './pages/auth/sign-in/sign-in.component';
import {SignUpComponent} from './pages/auth/sign-up/sign-up.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from './pages/auth/profile/profile.component';
import {ProjectEditComponent} from "./pages/management/projects/edit/project-edit.component";
import {ProjectListComponent} from "./pages/management/projects/list/project-list.component";
import {CaseListComponent} from "./pages/management/cases/list/case-list.component";
import {CaseEditComponent} from "./pages/management/cases/edit/case-edit.component";
import {ActionListComponent} from "./pages/management/actions/list/action-list.component";
import {ActionEditComponent} from "./pages/management/actions/edit/action-edit.component";
import {ActorListComponent} from "./pages/management/actors/list/actor-list.component";
import {ActorEditComponent} from "./pages/management/actors/edit/actor-edit.component";
import {EntityListComponent} from "./pages/management/entities/list/entity-list.component";
import {EntityEditComponent} from "./pages/management/entities/edit/entity-edit.component";
import {QueryListComponent} from "./pages/management/queries/list/query-list.component";
import {QueryEditComponent} from "./pages/management/queries/edit/query-edit.component";
import {FunctionListComponent} from "./pages/management/functions/list/function-list.component";
import {FunctionEditComponent} from "./pages/management/functions/edit/function-edit.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {FilterByProjectPipe} from "./pipes/filterByProduct/filter-by-product.pipe";
import {ProjectViewComponent} from './pages/management/projects/view/project-view.component';
import {PropertyListComponent} from "./pages/management/properties/list/property-list.component";
import {PropertyEditComponent} from "./pages/management/properties/edit/property-edit.component";
import {EntityViewComponent} from "./pages/management/entities/view/entity-view.component";
import { ArrayMapPipe } from './pipes/arrayMap/array-map.pipe';
import { GroupByPipe } from './pipes/groupBy/group-by.pipe';
import { SortByPipe } from './pipes/sortBy/sort-by.pipe';
import { FilterByPipe } from './pipes/filterBy/filter-by.pipe';

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
    CaseEditComponent,
    ActorListComponent,
    ActorEditComponent,
    ActionListComponent,
    ActionEditComponent,
    EntityListComponent,
    EntityEditComponent,
    QueryListComponent,
    QueryEditComponent,
    FunctionListComponent,
    FunctionEditComponent,
    FilterByProjectPipe,
    ProjectViewComponent,
    PropertyListComponent,
    PropertyEditComponent,
    EntityViewComponent,
    ArrayMapPipe,
    GroupByPipe,
    SortByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideDatabase(() => getDatabase()),
    AngularFirestoreModule,

    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
