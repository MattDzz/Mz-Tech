import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSearch } from './catalog-search';

describe('CatalogSearch', () => {
  let component: CatalogSearch;
  let fixture: ComponentFixture<CatalogSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
