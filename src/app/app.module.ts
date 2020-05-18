import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faCalendarAlt, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt, faPencilAlt, faPlus, faSearch, faUser, faSignOutAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from '@courses/courses-page.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { CourseComponent } from '@courses/components/courses-list/components/course/course.component';
import { CourseSearchComponent } from '@courses/components/course-search/course-search.component';
import { BreadcrumbsComponent } from '@breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from '@courses/components/courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { ConvertCourseDurationPipe } from '@pipes/convert-course-duration.pipe';
import { FilterCoursesByQueryPipe } from '@pipes/filter-courses-by-query.pipe';
import { OrderCoursesByDatePipe } from '@pipes/order-courses-by-date.pipe';
import { CoursesService } from './services/courses.service';
import { AuthorizationService } from './services/authorization.service';
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { LoginPageComponent } from '@login/login-page.component';
import { ModalComponent } from '@courses/components/modal/modal.component';
import { DeleteCourseModalContentComponent } from '@courses/components/delete-course-modal-content/delete-course-modal-content.component';
import { EditCoursePageComponent } from './components/edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';

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
    CourseBorderDirective,
    ConvertCourseDurationPipe,
    FilterCoursesByQueryPipe,
    OrderCoursesByDatePipe,
    LoginPageComponent,
    ModalComponent,
    DeleteCourseModalContentComponent,
    EditCoursePageComponent,
    AddCoursePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [CoursesService, AuthorizationService, BreadcrumbsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faClock, faCalendarAlt, faTrashAlt, faPencilAlt, faPlus, faSearch, faUser, faSignOutAlt, faStar, farStar);
  }
}
