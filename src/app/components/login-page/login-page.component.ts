import { Component } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';
import { Router} from '@angular/router';
import UserModel from './shared/models/user.class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public credentials: UserModel = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthorizationService, private router: Router) {
  }

  public submit(): void {
    this.authService.login(this.credentials);
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/courses']);
    }
  }
}
