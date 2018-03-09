import { TestBed, inject } from '@angular/core/testing';

import { ProgressInfoService } from './progress-info.service';

describe('ProgressInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressInfoService]
    });
  });

  it('should be created', inject([ProgressInfoService], (service: ProgressInfoService) => {
    expect(service).toBeTruthy();
  }));
});
