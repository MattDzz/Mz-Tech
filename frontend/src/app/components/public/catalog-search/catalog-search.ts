// ======================================================
// IMPORTACIONES
// ======================================================

import { Component, EventEmitter, Output } from '@angular/core';

// Módulo para trabajar con formularios
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-catalog-search',

  standalone: true,

  imports: [

    FormsModule

  ],

  templateUrl: './catalog-search.html',

  styleUrl: './catalog-search.css'

})

export class CatalogSearchComponent {

  // ======================================================
  // TEXTO ESCRITO EN EL BUSCADOR
  // ======================================================

  search: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearch(): void {

    this.searchChange.emit(this.search);

}

}