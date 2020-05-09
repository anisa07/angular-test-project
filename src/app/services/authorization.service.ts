import { Injectable } from '@angular/core';
import UserModel from '@login/shared/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authKey = '__save_fake_user_and_token';

  public login(credentials: UserModel): void {
    localStorage.setItem(this.authKey, JSON.stringify({
      userName: credentials.userName,
      token: 'token'
    }));
  }

  public logout(): void {
    localStorage.removeItem(this.authKey);
  }

  public isAuthenticated(): boolean {
    const authInfo = localStorage.getItem(this.authKey);
    return authInfo && JSON.parse(authInfo).token;
  }

  public getUserInfo(): string {
    const authInfo = localStorage.getItem(this.authKey);
    return authInfo && JSON.parse(authInfo).userName;
  }
}
