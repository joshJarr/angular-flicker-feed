import { TestBed, inject } from '@angular/core/testing';

import { PotatosService } from './potatos.service';

describe('PotatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotatosService]
    });
  });

  it('should be created', inject([PotatosService], (service: PotatosService) => {
    expect(service).toBeTruthy();
  }));
});
