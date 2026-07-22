// Importamos Component
import { Component } from '@angular/core';

@Component({

  // Nombre del componente
  selector: 'app-brands-section',

  // Standalone Component
  standalone: true,

  // No necesita importar componentes
  imports: [],

  // HTML
  templateUrl: './brands-section.html',

  // CSS
  styleUrl: './brands-section.css'

})

// Clase principal
export class BrandsSectionComponent {

  // ==========================================
  // Lista de marcas
  // ==========================================
  // Más adelante estas marcas vendrán
  // desde la base de datos.

  brands = [

    "Logitech",

    "HP",

    "Lenovo",

    "Kingston",

    "Redragon",

    "ASUS",

    "Corsair",

    "Dell"

  ];

}
