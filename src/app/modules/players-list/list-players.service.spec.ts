import { TestBed } from '@angular/core/testing';

import { ListPlayersService } from './list-players.service';

describe('ListJoueursService', () => {
  let service: ListPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
