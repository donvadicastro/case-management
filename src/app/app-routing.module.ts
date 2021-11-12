import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignUpComponent} from "./pages/auth/sign-up/sign-up.component";
import {SignInComponent} from "./pages/auth/sign-in/sign-in.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "./pages/auth/auth.guard";
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {ProjectListComponent} from "./pages/management/projects/list/project-list.component";
import {ProjectEditComponent} from "./pages/management/projects/edit/project-edit.component";
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

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },

    { path: '', canActivate: [AuthGuard], children: [
        { path: '', redirectTo: 'management/cases', pathMatch: 'full' },
        { path: 'profile', component: ProfileComponent },
        { path: 'dashboard', component: DashboardComponent },

        { path: 'management/projects', component: ProjectListComponent },
        { path: 'management/projects/new', component: ProjectEditComponent },
        { path: 'management/projects/:id', component: ProjectEditComponent },

        { path: 'management/cases', component: CaseListComponent },
        { path: 'management/cases/new', component: CaseEditComponent },
        { path: 'management/cases/:id', component: CaseEditComponent },

        { path: 'management/actors', component: ActorListComponent },
        { path: 'management/actors/new', component: ActorEditComponent },
        { path: 'management/actors/:id', component: ActorEditComponent },

        { path: 'management/actions', component: ActionListComponent },
        { path: 'management/actions/new', component: ActionEditComponent },
        { path: 'management/actions/:id', component: ActionEditComponent },

        { path: 'management/entities', component: EntityListComponent },
        { path: 'management/entities/new', component: EntityEditComponent },
        { path: 'management/entities/:id', component: EntityEditComponent },

        { path: 'management/queries', component: QueryListComponent },
        { path: 'management/queries/new', component: QueryEditComponent },
        { path: 'management/queries/:id', component: QueryEditComponent },

        { path: 'management/functions', component: FunctionListComponent },
        { path: 'management/functions/new', component: FunctionEditComponent },
        { path: 'management/functions/:id', component: FunctionEditComponent },
      ]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
