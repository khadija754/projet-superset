import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (submit)="login($event)">
      <input type="text" name="username" placeholder="Username" [(ngModel)]="username">
      <input type="password" name="password" placeholder="Password" [(ngModel)]="password">
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private authService: AuthService) {}

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
