import { TestBed } from '@angular/core/testing';

import { DeckstatsApiService } from './deckstats-api.service';

describe('DeckstatsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeckstatsApiService = TestBed.get(DeckstatsApiService);
    expect(service).toBeTruthy();
  });
});
