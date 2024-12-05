import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitealsComponent } from './diteals.component';

describe('DitealsComponent', () => {
  let component: DitealsComponent;
  let fixture: ComponentFixture<DitealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DitealsComponent]
    });
    fixture = TestBed.createComponent(DitealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
