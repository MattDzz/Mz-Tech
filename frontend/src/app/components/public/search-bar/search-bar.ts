import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBarComponent {

  search: string = '';

constructor(private router: Router) {}

onSearch(): void {

  console.log('buscar en home', this.search)
  const searchTerm = this.search.trim();
  if (!searchTerm) {
    this.router.navigate(['/catalog']);
    return;
  }

  this.router.navigate(['/catalog'], {
    queryParams: { buscar: searchTerm }

  });
}
}
