import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import UserInterface from '@login/shared/interfaces/user.interface';
import { apiURL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements OnDestroy {
  public isAuthenticated: BehaviorSubject<boolean>;
  private loginSubscription: Subscription;
  private authKey = '__save_fake_user_and_token';

  constructor(private http: HttpClient) {
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
    this.loginSubscription = this.http.post(`${apiURL}/auth/login`, credentials).subscribe((data: { token: string }) => {
      sessionStorage.setItem(this.authKey, JSON.stringify({
        userName: credentials.userName,
        token: data.token
      }));
      this.setAuthState(true);
    });
  }

  public logout(): void {
    sessionStorage.removeItem(this.authKey);
    this.setAuthState(false);
  }

  public getUserInfo(): UserInterface {
    const authInfo = sessionStorage.getItem(this.authKey);
    return authInfo && JSON.parse(authInfo);
  }

  public ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
