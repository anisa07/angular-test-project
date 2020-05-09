import { Component } from '@angular/core';
import { AuthorizationService} from '@app/services/authorization.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthorizationService, private router: Router) { }

  public logout(): void {
    this.authService.logout();
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
