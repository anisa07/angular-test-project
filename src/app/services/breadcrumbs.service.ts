import { Injectable } from '@angular/core';
import { BreadcrumbInterface } from '@breadcrumbs/shared/interfaces/breadcrumb.interface';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  public breadcrumbs: Array<BreadcrumbInterface> = [
    {
      name: 'Courses',
      link: undefined
    }
  ];

  public get getBreadcrumbs(): Array<BreadcrumbInterface> {
    return this.breadcrumbs;
  }

  public addBreadcrumbs(breadcrumb: BreadcrumbInterface, pathForPrevBreadcrumb: string): void {
    this.updateBreadcrumbsLink(this.breadcrumbs.length - 1, pathForPrevBreadcrumb);
    this.breadcrumbs.push(breadcrumb);
  }

  public removeBreadcrumbs(name: string): void {
    const breadcrumbIndex = this.breadcrumbs.findIndex(crumb => crumb.name === name);
    this.updateBreadcrumbsLink(breadcrumbIndex);
    this.breadcrumbs = this.breadcrumbs.slice(0, breadcrumbIndex + 1);
  }

  public updateBreadcrumbsLink(index: number, link?: string): void {
    this.breadcrumbs[index].link = link;
  }
}
