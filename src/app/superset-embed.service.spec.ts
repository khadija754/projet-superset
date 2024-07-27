import { TestBed } from '@angular/core/testing';

import { SupersetEmbedService } from './superset-embed.service';

describe('SupersetEmbedService', () => {
  let service: SupersetEmbedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupersetEmbedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
