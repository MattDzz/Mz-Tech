import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsSectionComponent } from './brands-section';

describe('BrandsSection', () => {
  let component: BrandsSectionComponent;
  let fixture: ComponentFixture<BrandsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
