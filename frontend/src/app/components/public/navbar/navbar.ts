import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

  openWhatsApp():void {
    const phone = '573002555909';

    const message = 'Hola, estoy interesado/a en los productos de MZTech. ¿Podrían proporcionarme más información?';

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank'); /*encodeURIComponent sirve para codificar el mensaje antes de enviarlo */ 
  }
}
