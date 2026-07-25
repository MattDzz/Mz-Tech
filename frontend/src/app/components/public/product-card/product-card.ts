// ======================================================
// IMPORTACIONES
// ======================================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz del producto
import { Product } from '../../../interfaces/product.interface';

// Servicio para navegar entre páginas
import { Router } from '@angular/router';

@Component({

  selector: 'app-product-card',

  standalone: true,

  imports: [

    CommonModule

  ],

  templateUrl: './product-card.html',

  styleUrl: './product-card.css'

})

export class ProductCardComponent {

  // ======================================================
  // PRODUCTO RECIBIDO DESDE EL COMPONENTE PADRE
  // ======================================================

  @Input({ required: true })

  product!: Product;

  // ======================================================
  // CONSTRUCTOR
  // Angular inyecta el Router.
  // ======================================================

  constructor(

    private router: Router

  ) {}

  // ======================================================
  // VER DETALLE DEL PRODUCTO
  // Navega a la página del producto enviando su id.
  // ======================================================

  viewDetail(): void {

    this.router.navigate(['/product-detail', this.product.id]);

  }

}