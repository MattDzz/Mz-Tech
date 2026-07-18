import { Component } from '@angular/core';

import { HeroComponent } from '../../../components/hero/hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePageComponent {}
