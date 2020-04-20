import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    FakeLogoComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
