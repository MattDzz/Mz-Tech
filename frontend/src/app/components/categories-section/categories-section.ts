// Importamos el decorador Component de Angular
import { Component } from '@angular/core';

@Component({

  // Nombre del componente
  selector: 'app-categories-section',

  // Indicamos que es un componente Standalone
  standalone: true,

  // Este componente no utiliza otros componentes por ahora
  imports: [],

  // Archivo HTML
  templateUrl: './categories-section.html',

  // Archivo CSS
  styleUrl: './categories-section.css'

})

// Clase principal del componente
export class CategoriesSectionComponent {

  // ======================================================
  // Lista de categorías
  // ======================================================
  // Aquí simulamos los datos que en el futuro llegarán
  // desde la base de datos mediante una API.
  // Cada objeto representa una categoría.

  categories = [

    {
      icon: '🖱️',
      name: 'Mouse'
    },

    {
      icon: '⌨️',
      name: 'Teclados'
    },

    {
      icon: '🎧',
      name: 'Audífonos'
    },

    {
      icon: '🔌',
      name: 'Cargadores'
    },

    {
      icon: '💾',
      name: 'Memorias USB'
    },

    {
      icon: '🖥️',
      name: 'Monitores'
    },

    {
      icon: '🪑',
      name: 'Sillas Gamer'
    },

    {
      icon: '🎮',
      name: 'Accesorios Gamer'
    }

  ];

}