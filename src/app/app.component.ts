import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public showBreadcrumbs = false;
  private authSubscription: Subscription;

  constructor(private authService: AuthorizationService) { }

  public ngOnInit(): void {
    this.authSubscription = this.authService.getAuthState().subscribe((authState) => {
      this.showBreadcrumbs = authState;
    });
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
      this.authSubscription = null;
    }
  }
}
