import { Component } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';
import { Router} from '@angular/router';
import UserInterface from './shared/interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public credentials: UserInterface = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthorizationService, private router: Router) {
  }

  public submit(): void {
    this.authService.login(this.credentials);
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/courses']);
    }
  }
}
