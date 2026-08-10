// ======================================================
// IMPORTACIONES
// ======================================================

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({

  selector: 'app-catalog-filters',

  standalone: true,

  imports: [
    FormsModule
  ],

  templateUrl: './catalog-filters.html',

  styleUrl: './catalog-filters.css'

})

export class CatalogFiltersComponent {

  //Categorias seleccionadas
selectedCategories: string[] = [];

//Marcas seleccionadas
selectedBrands: string[] = [];

//Enviar los filtros al componente padre
@Output() filtersChange = new EventEmitter<{ categories: string[], brands: string[] }>();

//=========================================
// Categoria
//=========================================

toggleCategory(category: string, checked: boolean): void {

  if (checked) {

    this.selectedCategories.push(category);

  } else {

    this.selectedCategories =
      this.selectedCategories.filter(item => item !== category);
  }

  this.emitFilters();
}

//=========================================
// Marca
//=========================================

toggleBrand(brand: string, checked: boolean): void {

  if (checked) {

    this.selectedBrands.push(brand);

  } else {

    this.selectedBrands =
      this.selectedBrands.filter(item => item !== brand);
  }

  this.emitFilters();
}

//=========================================
//Enviar Filtros
//=========================================

private emitFilters(): void {

  this.filtersChange.emit({
    categories: this.selectedCategories,
    brands: this.selectedBrands
  });
}
}