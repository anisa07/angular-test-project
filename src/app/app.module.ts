import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt, faPencilAlt, faPlus, faSearch, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { CourseComponent } from './components/courses-page/components/courses-list/components/course/course.component';
import { CourseSearchComponent } from './components/courses-page/components/course-search/course-search.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './components/courses-page/components/courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faClock, faCalendarAlt, faTrashAlt, faPencilAlt, faPlus, faSearch, faUser, faSignOutAlt);
  }
}
