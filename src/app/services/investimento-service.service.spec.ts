import { TestBed } from '@angular/core/testing';

import { InvestimentoServiceService } from './investimento-service.service';

describe('InvestimentoServiceService', () => {
  let service: InvestimentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestimentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
