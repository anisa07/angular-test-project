import { Component, DoCheck } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  public showBreadcrumbs: boolean;

  constructor(private authService: AuthorizationService) {
  }

  public ngDoCheck(): void {
    this.showBreadcrumbs = this.authService.isAuthenticated();
  }
}
