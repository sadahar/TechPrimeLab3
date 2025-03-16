import { TestBed } from '@angular/core/testing';

import { AddprojectserviceService } from './addprojectservice.service';

describe('AddprojectserviceService', () => {
  let service: AddprojectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprojectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
