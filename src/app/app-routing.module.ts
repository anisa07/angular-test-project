import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from '@courses/courses-page.component';
// @ts-ignore
import { LoginPageComponent } from '@login/login-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
