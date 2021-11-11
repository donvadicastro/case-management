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
        { path: 'management/projects/:id', component: ProjectEditComponent },

        { path: 'management/cases', component: CaseListComponent },
        { path: 'management/cases/new', component: CaseEditComponent },
        { path: 'management/cases/:id', component: CaseEditComponent },
      ]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
