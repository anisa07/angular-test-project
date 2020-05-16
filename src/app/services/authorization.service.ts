import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import UserInterface from '@login/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public isAuthenticated: BehaviorSubject<boolean>;
  private authKey = '__save_fake_user_and_token';

  constructor() {
    const authInfo = sessionStorage.getItem(this.authKey);
    this.isAuthenticated = new BehaviorSubject<boolean>(!!(authInfo && JSON.parse(authInfo).token));
  }

  public getAuthState(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  public setAuthState(isAuth): void {
    this.isAuthenticated.next(isAuth);
  }

  public login(credentials: UserInterface): void {
    sessionStorage.setItem(this.authKey, JSON.stringify({
      userName: credentials.userName,
      token: 'token'
    }));
    this.setAuthState(true);
  }

  public logout(): void {
    sessionStorage.removeItem(this.authKey);
    this.setAuthState(false);
  }

  public getUserInfo(): string {
    const authInfo = sessionStorage.getItem(this.authKey);
    return authInfo && JSON.parse(authInfo).userName;
  }
}
