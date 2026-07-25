// ======================================================
// IMPORTACIONES
// ======================================================

import { Component } from '@angular/core';

// Componente de la tarjeta del producto
import { ProductCardComponent } from '../product-card/product-card';

// Servicio de productos
import { ProductService } from '../../../services/product';
import { Product } from '../../../interfaces/product.interface';

@Component({

  selector: 'app-featured-products',

  standalone: true,

  imports: [

    ProductCardComponent

  ],

  templateUrl: './featured-products.html',

  styleUrl: './featured-products.css'

})

export class FeaturedProductsComponent {

  products: Product[] = [];

  // ======================================================
  // CONSTRUCTOR
  // Angular inyecta automáticamente el servicio.
  // ======================================================

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}