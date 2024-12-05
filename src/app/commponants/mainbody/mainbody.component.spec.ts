import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbodyComponent } from './mainbody.component';

describe('MainbodyComponent', () => {
  let component: MainbodyComponent;
  let fixture: ComponentFixture<MainbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainbodyComponent]
    });
    fixture = TestBed.createComponent(MainbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
