import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateigoresComponent } from './cateigores.component';

describe('CateigoresComponent', () => {
  let component: CateigoresComponent;
  let fixture: ComponentFixture<CateigoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateigoresComponent]
    });
    fixture = TestBed.createComponent(CateigoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
