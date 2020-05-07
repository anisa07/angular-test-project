import { Component } from '@angular/core';
import { AuthorizationService } from '@app/services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public user: string;
  public password: string;

  constructor(private authService: AuthorizationService) {
  }

  public submit(): void {
    console.log('Fake Login');
    this.authService.login({user: this.user, token: 'token'});
  }
}
