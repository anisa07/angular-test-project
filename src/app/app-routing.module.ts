import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

const routes: Routes = [
  { path: 'courses-page', component: CoursesPageComponent },
  { path: '',   redirectTo: '/courses-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
