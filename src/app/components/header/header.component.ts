import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showLogout = false;
  public userName: string;
  private authSubscription: Subscription;

  constructor(private authService: AuthorizationService, private router: Router) { }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public ngOnInit(): void {
    this.authSubscription = this.authService.getAuthState().subscribe((authState) => {
      this.showLogout = authState;
      if (authState) {
        this.userName = this.authService.getUserInfo().userName;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
      this.authSubscription = null;
    }
  }
}
