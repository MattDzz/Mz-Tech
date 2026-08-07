// ======================================================
// IMPORTACIONES
// ======================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

    CommonModule,
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
  // ======================================================

  constructor(
    private productService: ProductService
  ) {

    this.loadProducts();

  }

  // ======================================================
  // CARGAR PRODUCTOS DESDE LA API
  // ======================================================

  loadProducts(): void {

    this.productService.getProducts().subscribe({

      next: (products) => {

        console.log( 'Productos recibidos desde la API:', products );

        this.products = products;

      },

      error: (error) => {

        console.error('Error al cargar los productos:', error);

      }

    });

  }

}