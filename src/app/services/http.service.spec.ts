import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestCtrl=HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
    httpTestCtrl:TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
