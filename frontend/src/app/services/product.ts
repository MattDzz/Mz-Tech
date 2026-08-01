// =====================================================
// IMPORTACIONES
// =====================================================

import { Injectable } from '@angular/core';

// Interfaz del producto
import { Product } from '../interfaces/product.interface';

@Injectable({

  providedIn: 'root'

})

export class ProductService {

  // =====================================================
  // LISTA DE PRODUCTOS (SIMULACIÓN DEL BACKEND)
  // =====================================================

  private products: Product[] = [

    {

      id: 1,

      name: 'Mouse Gamer RGB',

      description: 'Mouse gamer con iluminación RGB',

      price: 89900,

      stock: 25,

      image: 'products/mouse.jpg',

      brand: 'Logitech',

      category: 'Mouse',

      active: true

    },

    {

      id: 2,

      name: 'Teclado Mecánico',

      description: 'Teclado mecánico RGB',

      price: 189900,

      stock: 18,

      image: 'products/keyboard.jpg',

      brand: 'Redragon',

      category: 'Teclados',

      active: true

    },

    {

      id: 3,

      name: 'Audífonos Gamer',

      description: 'Audio envolvente 7.1',

      price: 249900,

      stock: 12,

      image: 'products/headset.jpg',

      brand: 'HyperX',

      category: 'Audífonos',

      active: true

    }

  ];

  // =====================================================
  // OBTENER TODOS LOS PRODUCTOS
  // =====================================================

  getProducts(): Product[] {

    return this.products;

  }

}