import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private key = '__save_fake_user_and_token';

  public login(credentials): void {
    localStorage.setItem(this.key, JSON.stringify(credentials));
  }

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public isAuthenticated(): boolean {
    const authInfo = localStorage.getItem(this.key);
    return authInfo && JSON.parse(authInfo).token;
  }

  public getUserInfo(): string {
    const authInfo = localStorage.getItem(this.key);
    return authInfo && JSON.parse(authInfo).user;
  }
}
