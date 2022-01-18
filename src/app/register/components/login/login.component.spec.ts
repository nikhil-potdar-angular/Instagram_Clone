import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable,of} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[RouterTestingModule,
        HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call login", () => {
    spyOn(component["service"], "post").and.returnValue(
      of({
        err: "test error"
      })
    );
    let callbackSpy = jasmine.createSpy();

    component.onLogin();

    expect(callbackSpy).toHaveBeenCalled
  });

});
