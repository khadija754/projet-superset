// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { SupersetEmbedService } from './superset-embed.service';
import { SupersetDashboardComponent } from './superset-dashboard/superset-dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SupersetDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    AuthService,
    SupersetEmbedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
