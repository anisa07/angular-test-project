import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from '@courses/courses-page.component';
import { LoginPageComponent } from '@login/login-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from '@app/auth.guard';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent  },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
