import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';
import { BreadcrumbInterface } from '@breadcrumbs/shared/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  constructor(public breadcrumbsService: BreadcrumbsService, private router: Router) {
  }

  public trackByFun(index, item): string {
    return `${index}-${item.name}`;
  }

  public navigate(item: BreadcrumbInterface): void {
    if (item.link) {
      this.router.navigate([item.link]);
      this.breadcrumbsService.removeBreadcrumbs(item.name);
    }
  }
}
