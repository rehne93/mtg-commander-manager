import { TestBed } from '@angular/core/testing';

import { ScryfallApiService } from './scryfall-api.service';

describe('ScryfallApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScryfallApiService = TestBed.get(ScryfallApiService);
    expect(service).toBeTruthy();
  });
});
