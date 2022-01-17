import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email.component';
import { HttpService } from 'src/app/services/http.service';
import {  observable, Observable,of} from 'rxjs';

import { ReactiveFormsModule } from '@angular/forms';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/empty';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;
  let service:HttpService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      imports :[RouterTestingModule,
        HttpClientModule,ReactiveFormsModule],
        providers:[HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(HttpService);
    service=new HttpService(null);
    // component=new EmailComponent(null,null,null)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
 
  // it('should call submit ', () => {
  //   let spy= spyOn(service,'post').and.callFake((t)=>
  //    {
  //      return 
  //    } )

  //    component.onSubmit()
  //    expect(spy).toHaveBeenCalled();
  // });

  //   it('should call submit return responce ', () => {
  //   let spy= spyOn(service,'post').and.callFake((t)=>
  //    {
  //      return 
  //    } )

  //    component.onSubmit()
  //    expect(spy).toHaveBeenCalled();
  // });
  // it("should call getUsers and return list of users", async(() => {
  //   const response=[];

  //   spyOn(service, 'onSubmit').and.returnValue(of(response))

  //   component.onSubmit()

  //   fixture.detectChanges();
  
  //   expect(component.res).toEqual(response);
  // }));

  

  it("should call submit", () => {
    spyOn(component["service"], "post").and.returnValue(
      of({
        err: "test error"
      })
    );
    let callbackSpy = jasmine.createSpy();

    component.onSubmit();

    expect(callbackSpy).toHaveBeenCalled
  });

//  it('should call subscribe ', () => {
//   const data = null;
//   spyOn(service, 'post').and.returnValue(data);
//   component.onSubmit(); 
//   data.subscribe({
//       complete: () => {
//           expect(component.onSubmit).toHaveBeenCalledWith();
//       }
//   });
    
//   });
 

});
