import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exemple d'ajout d'un token d'authentification
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN` // Remplacez `YOUR_TOKEN` par le token réel ou la logique pour obtenir le token
      }
    });
    return next.handle(authReq);
  }
}
