import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { EmailComponent } from './email.component';
import { HttpService } from 'src/app/services/http.service';
import {  of, Subscriber } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;
  let service:HttpService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      imports :[RouterTestingModule,
        HttpClientTestingModule,ReactiveFormsModule],
        providers:[HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
