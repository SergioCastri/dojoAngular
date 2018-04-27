import { TestBed, inject } from '@angular/core/testing';

import { MercadolibreService } from './mercadolibre.service';

describe('MercadolibreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadolibreService]
    });
  });

  it('should be created', inject([MercadolibreService], (service: MercadolibreService) => {
    expect(service).toBeTruthy();
  }));
});
