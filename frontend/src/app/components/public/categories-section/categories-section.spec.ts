import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSectionComponent } from './categories-section';

describe('CategoriesSection', () => {
  let component: CategoriesSectionComponent;
  let fixture: ComponentFixture<CategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
