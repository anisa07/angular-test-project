import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizationService } from './services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthorizationService, private router: Router) {
  }

  public canActivate(): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map(authValue => {
        if (!authValue) {
          this.router.navigate(['/login']);
        }
        return authValue;
      })
    );
  }
}
