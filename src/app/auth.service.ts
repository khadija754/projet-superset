// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8088/api/v1/security/login';  // URL correcte pour le login
  private csrfUrl = 'http://127.0.0.1:8088/api/v1/security/csrf_token/';  // URL correcte pour le token CSRF

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir le token CSRF
  getCsrfToken(): Observable<string> {
    return this.http.get<{result: {csrf_token: string}}>(this.csrfUrl).pipe(
      map(response => response.result.csrf_token)
    );
  }

  // Méthode pour se connecter à Superset
  login(username: string, password: string): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(csrfToken => {
        const body = {
          password: password,
          provider: 'db',
          refresh: true,
          username: username
        };
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        });

        return this.http.post(this.loginUrl, body, { headers });
      })
    );
  }
}
