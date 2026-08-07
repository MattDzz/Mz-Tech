// ======================================================
// IMPORTACIONES
// ======================================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente de la tarjeta del producto
import { ProductCardComponent } from '../product-card/product-card';

// Servicio de productos
import { ProductService } from '../../../services/product';

// Interfaz del producto
import { Product } from '../../../interfaces/product.interface';

@Component({

  selector: 'app-featured-products',

  standalone: true,

  imports: [

    CommonModule,

    ProductCardComponent

  ],

  templateUrl: './featured-products.html',

  styleUrl: './featured-products.css'

})

export class FeaturedProductsComponent {

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

        this.products = products;

      },

      error: (error) => {

        console.error('Error al obtener los productos:', error);

      }

    });

  }

}