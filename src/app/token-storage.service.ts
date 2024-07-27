// src/app/token-storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private tokenKey = 'auth-token';

  constructor() {}

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.tokenKey);
    window.sessionStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.tokenKey);
  }

  public clearToken(): void {
    window.sessionStorage.removeItem(this.tokenKey);
  }
}
