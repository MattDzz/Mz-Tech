// Importamos Component
import { Component } from '@angular/core';

@Component({

  // Nombre del componente
  selector: 'app-featured-products',

  // Standalone
  standalone: true,

  // No necesita importar otros componentes
  imports: [],

  // HTML
  templateUrl: './featured-products.html',

  // CSS
  styleUrl: './featured-products.css'

})

// Clase principal
export class FeaturedProductsComponent {

  // ====================================================
  // Productos simulados
  // ====================================================
  // Más adelante estos datos vendrán desde la API.

  products = [

    {

      image:"https://placehold.co/300x300",

      name:"Mouse Gamer RGB",

      price:45000

    },

    {

      image:"https://placehold.co/300x300",

      name:"Teclado Mecánico",

      price:185000

    },

    {

      image:"https://placehold.co/300x300",

      name:"Audífonos Gamer",

      price:120000

    },

    {

      image:"https://placehold.co/300x300",

      name:"Cargador USB-C",

      price:35000

    }

  ];

}