import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignUpComponent} from "./pages/auth/sign-up/sign-up.component";
import {SignInComponent} from "./pages/auth/sign-in/sign-in.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "./pages/auth/auth.guard";
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {ProjectListComponent} from "./pages/management/projects/list/project-list.component";
import {ProjectEditComponent} from "./pages/management/projects/edit/project-edit.component";
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
import {CaseListComponent} from "./pages/management/cases/list/case-list.component";
import {CaseEditComponent} from "./pages/management/cases/edit/case-edit.component";
import {ProjectViewComponent} from "./pages/management/projects/view/project-view.component";
import {PropertyListComponent} from "./pages/management/properties/list/property-list.component";
import {PropertyEditComponent} from "./pages/management/properties/edit/property-edit.component";
import {EntityViewComponent} from "./pages/management/entities/view/entity-view.component";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },

    { path: '', canActivate: [AuthGuard], children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'profile', component: ProfileComponent },
        { path: 'dashboard', component: DashboardComponent },

        { path: 'management/projects', component: ProjectListComponent },
        { path: 'management/projects/new', component: ProjectEditComponent },
        { path: 'management/projects/view/:id', component: ProjectViewComponent, children: [
            { path: '', redirectTo: 'cases', pathMatch: 'full' },
            { path: 'cases', component: CaseListComponent },
            { path: 'cases/new', component: CaseEditComponent },
            { path: 'cases/:id', component: CaseEditComponent },

            { path: 'actors', component: ActorListComponent },
            { path: 'actors/new', component: ActorEditComponent },
            { path: 'actors/:id', component: ActorEditComponent },

            { path: 'actions', component: ActionListComponent },
            { path: 'actions/new', component: ActionEditComponent },
            { path: 'actions/:id', component: ActionEditComponent },

            { path: 'entities', component: EntityListComponent },
            { path: 'entities/new', component: EntityEditComponent },
            { path: 'entities/view/:id', component: EntityViewComponent, children: [
                { path: '', redirectTo: 'cases', pathMatch: 'full' },
                { path: 'properties', component: PropertyListComponent },
                { path: 'properties/new', component: PropertyEditComponent },
                { path: 'properties/:id', component: PropertyEditComponent },
              ] },
            { path: 'entities/:id', component: EntityEditComponent },

            { path: 'queries', component: QueryListComponent },
            { path: 'queries/new', component: QueryEditComponent },
            { path: 'queries/:id', component: QueryEditComponent },

            { path: 'functions', component: FunctionListComponent },
            { path: 'functions/new', component: FunctionEditComponent },
            { path: 'functions/:id', component: FunctionEditComponent },
          ] },
        { path: 'management/projects/:id', component: ProjectEditComponent },
      ]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
