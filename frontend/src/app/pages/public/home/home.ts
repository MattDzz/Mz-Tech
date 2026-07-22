// Importamos el decorador Component de Angular
import { Component } from '@angular/core';

// Importamos el Hero
import { HeroComponent } from '../../../components/hero/hero';

// Importamos el buscador
import { SearchBarComponent } from '../../../components/search-bar/search-bar';

//Importamos la seccion de categorias
import { CategoriesSectionComponent } from '../../../components/categories-section/categories-section';

@Component({

  // Nombre del componente
  selector: 'app-home-page',

  // Componente Standalone
  standalone: true,

  // Componentes que utilizará el Home
  imports: [
    HeroComponent,
    SearchBarComponent,
    CategoriesSectionComponent
  ],

  // Vista HTML
  templateUrl: './home.html',

  // Estilos CSS
  styleUrl: './home.css'

})

export class HomePageComponent {

}
