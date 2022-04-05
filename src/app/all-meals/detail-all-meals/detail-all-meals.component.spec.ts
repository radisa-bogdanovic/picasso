import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAllMealsComponent } from './detail-all-meals.component';

describe('DetailAllMealsComponent', () => {
  let component: DetailAllMealsComponent;
  let fixture: ComponentFixture<DetailAllMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAllMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAllMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
