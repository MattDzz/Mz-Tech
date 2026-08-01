// ======================================================
// IMPORTACIONES
// ======================================================

import { Component } from '@angular/core';

// Componente de filtros del catálogo
import { CatalogFiltersComponent } from '../../../components/public/catalog-filters/catalog-filters';

// Tarjeta del producto
import { ProductCardComponent } from '../../../components/public/product-card/product-card';

// Servicio de productos
import { ProductService } from '../../../services/product';

// Interfaz del producto
import { Product } from '../../../interfaces/product.interface';

// Componente del buscador
import { CatalogSearchComponent } from '../../../components/public/catalog-search/catalog-search';

@Component({

  selector: 'app-catalog-page',

  standalone: true,

  imports: [

    CatalogFiltersComponent,

    ProductCardComponent,
    CatalogSearchComponent

  ],

  templateUrl: './catalog.html',

  styleUrl: './catalog.css'

})

export class CatalogPageComponent {

  // ======================================================
  // LISTA DE PRODUCTOS
  // ======================================================

  products: Product[] = [];

  // ======================================================
  // CONSTRUCTOR
  // Angular inyecta el servicio y carga los productos.
  // ======================================================

  constructor(

    private productService: ProductService

  ) {

    this.products = this.productService.getProducts();

  }

}