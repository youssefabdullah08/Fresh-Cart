import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateinfoComponent } from './cateinfo.component';

describe('CateinfoComponent', () => {
  let component: CateinfoComponent;
  let fixture: ComponentFixture<CateinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateinfoComponent]
    });
    fixture = TestBed.createComponent(CateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
