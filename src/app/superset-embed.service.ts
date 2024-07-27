// src/app/superset-embed.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupersetEmbedService {
  private supersetUrl = 'http://127.0.0.1:8088/login/';
  private supersetApiUrl = `${this.supersetUrl}/api/v1`;
  private dashboardId = '6';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const body = {
      password: 'admin',
      provider: 'postgresql',
      refresh: true,
      username: 'admin'
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.supersetApiUrl}/security/login`, body, { headers }).pipe(
      catchError(error => {
        console.error(error);
        return throwError(() => error);
      }),
      switchMap((accessToken: { access_token: string }) => {
        const body = {
          resources: [{ type: 'dashboard', id: this.dashboardId }],
          rls: [],
          user: { username: 'report-viewer', first_name: 'report-viewer', last_name: 'report-viewer' }
        };
        const acc = accessToken.access_token;
        const authHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${acc}` });

        return this.http.post<any>(`${this.supersetApiUrl}/security/guest_token`, body, { headers: authHeaders });
      })
    );
  }

  embedDashboardU(): Observable<void> {
    return new Observable<void>((observer) => {
      this.getToken().subscribe(
        token => {
          if (typeof (window as any).embedDashboard !== 'undefined') {
            (window as any).embedDashboard({
              id: this.dashboardId,
              supersetDomain: this.supersetUrl,
              mountPoint: document.getElementById('superset_embedding_div_class')!,
              fetchGuestToken: () => token['token'],
              dashboardUiConfig: {
                hideTitle: true,
                hideChartControls: true,
                hideTab: true,
                filters: { visible: false, expanded: false },
                urlParams: { standalone: '1', show_filters: '0', show_native_filters: '0' }
              }
            });
            observer.next();
            observer.complete();
          } else {
            observer.error(new Error('embedDashboard is not defined'));
          }
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
}
