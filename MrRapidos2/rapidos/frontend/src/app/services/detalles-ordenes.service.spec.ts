import { TestBed } from '@angular/core/testing';

import { DetallesOrdenesService } from './detalles-ordenes.service';

describe('DetallesOrdenesService', () => {
  let service: DetallesOrdenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesOrdenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
