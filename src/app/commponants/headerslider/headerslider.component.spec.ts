import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersliderComponent } from './headerslider.component';

describe('HeadersliderComponent', () => {
  let component: HeadersliderComponent;
  let fixture: ComponentFixture<HeadersliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadersliderComponent]
    });
    fixture = TestBed.createComponent(HeadersliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
