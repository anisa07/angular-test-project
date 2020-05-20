import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationService} from '@app/services/authorization.service';
import {Router} from '@angular/router';
import UserInterface from './shared/interfaces/user.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public credentials: UserInterface = {
    userName: '',
    password: ''
  };
  private authSubscription: Subscription;

  constructor(private authService: AuthorizationService, private router: Router) {
  }

  public submit(): void {
    this.authService.login(this.credentials);
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
      this.authSubscription = null;
    }
  }

  public ngOnInit(): void {
    this.authSubscription = this.authService.getAuthState().subscribe((authState) => {
      if (authState) {
        this.router.navigate(['/courses']);
      }
    });
  }
}
