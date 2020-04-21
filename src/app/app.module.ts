import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { CourseComponent } from './components/courses-page/components/course/course.component';
import { CourseSearchComponent } from './components/courses-page/components/course-search/course-search.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './components/courses-page/components/courses-list/courses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    LogoComponent,
    CourseComponent,
    CourseSearchComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
