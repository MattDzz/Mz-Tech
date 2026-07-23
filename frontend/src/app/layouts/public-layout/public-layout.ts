import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../../components/public/navbar/navbar';
import { PublicFooterComponent } from '../../components/public/public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
  RouterOutlet,
  NavbarComponent,
  PublicFooterComponent 
  
],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayoutComponent {}
