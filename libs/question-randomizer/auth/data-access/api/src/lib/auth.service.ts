import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UtilitiesService } from '@my-projects-nx/shared/util/utils';
import { IUserLogin } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';

@Injectable()
export class AuthService {
  baseUrl = this.utilitiesService.getApiUrl();
  authUrl = this.baseUrl + '/api/auth';
  isAuthenticated = false;
  redirectUrl = '';
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private utilitiesService: UtilitiesService
  ) {}

  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status); // Raise changed event
  }

  login(userLogin: IUserLogin): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/login', userLogin).pipe(
      map((loggedIn) => {
        this.isAuthenticated = loggedIn;
        this.userAuthChanged(loggedIn);
        return loggedIn;
      }),
      catchError(this.handleError)
    );
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/logout', null).pipe(
      map((loggedOut) => {
        this.isAuthenticated = !loggedOut;
        this.userAuthChanged(!loggedOut); // Return loggedIn status
        return loggedOut;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
      // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(() => error || 'Server error');
  }
}
