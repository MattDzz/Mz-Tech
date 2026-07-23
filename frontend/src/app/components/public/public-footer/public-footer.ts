// Importamos Component
import { Component } from '@angular/core';

// Importamos RouterLink para navegar entre páginas
import { RouterLink } from '@angular/router';

@Component({

  // Nombre del componente
  selector: 'app-public-footer',

  // Componente Standalone
  standalone: true,

  // Componentes que utilizará
  imports: [

    RouterLink

  ],

  // HTML
  templateUrl: './public-footer.html',

  // CSS
  styleUrl: './public-footer.css'

})

// Clase principal
export class PublicFooterComponent {

// ===========================================
// ENLACES DEL MENÚ
// ===========================================

menu = [

  {
    title: 'Inicio',
    route: '/'
  },

  {
    title: 'Catálogo',
    route: '/catalog'
  },

  {
    title: 'Categorías',
    route: '/categories'
  },

  {
    title: 'Nosotros',
    route: '/about'
  },

  {
    title: 'Contacto',
    route: '/contact'
  }

];

// ===========================================
// CATEGORÍAS
// ===========================================

categories = [

  'Mouse',

  'Teclados',

  'Audífonos',

  'Cargadores',

  'Memorias USB'

];

// ===========================================
// REDES SOCIALES
// ===========================================

socials = [

  {
    name: 'Facebook',
    url: '#'
  },

  {
    name: 'Instagram',
    url: '#'
  },

  {
    name: 'TikTok',
    url: '#'
  }

];

// ===========================================
// MÉTODOS DE PAGO
// ===========================================

payments = [

  'Visa',

  'Mastercard',

  'Nequi',

  'Daviplata'

];

}