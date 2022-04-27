import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookPopupComponent } from './new-book-popup.component';

describe('NewBookPopupComponent', () => {
  let component: NewBookPopupComponent;
  let fixture: ComponentFixture<NewBookPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
