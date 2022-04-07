import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutMealsAreaComponent } from './details-about-meals-area.component';

describe('DetailsAboutMealsAreaComponent', () => {
  let component: DetailsAboutMealsAreaComponent;
  let fixture: ComponentFixture<DetailsAboutMealsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAboutMealsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAboutMealsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
