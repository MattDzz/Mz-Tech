import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFiltersComponent } from './catalog-filters';

describe('CatalogFilters', () => {
  let component: CatalogFiltersComponent;
  let fixture: ComponentFixture<CatalogFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogFiltersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
