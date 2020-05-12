import { Injectable } from '@angular/core';
import UserInterface from '@login/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authKey = '__save_fake_user_and_token';

  public login(credentials: UserInterface): void {
    sessionStorage.setItem(this.authKey, JSON.stringify({
      userName: credentials.userName,
      token: 'token'
    }));
  }

  public logout(): void {
    sessionStorage.removeItem(this.authKey);
  }

  public isAuthenticated(): boolean {
    const authInfo = sessionStorage.getItem(this.authKey);
    return !!(authInfo && JSON.parse(authInfo).token);
  }

  public getUserInfo(): string {
    const authInfo = sessionStorage.getItem(this.authKey);
    return authInfo && JSON.parse(authInfo).userName;
  }
}
