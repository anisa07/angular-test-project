import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class PagePartsModule { }
