// src/app/superset-dashboard/superset-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { SupersetEmbedService } from '../superset-embed.service';

@Component({
  selector: 'app-superset-dashboard',
  templateUrl: './superset-dashboard.component.html',
  styleUrls: ['./superset-dashboard.component.css']
})
export class SupersetDashboardComponent implements OnInit {

  constructor(private supersetEmbedService: SupersetEmbedService) { }

  ngOnInit(): void {
    this.supersetEmbedService.embedDashboardU().subscribe();
  }

}
