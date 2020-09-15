import { TestBed } from '@angular/core/testing';

import { AudioServeService } from './audio-serve.service';

describe('AudioServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioServeService = TestBed.get(AudioServeService);
    expect(service).toBeTruthy();
  });
});
