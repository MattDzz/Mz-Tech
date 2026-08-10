// ======================================================
// IMPORTACIONES
// ======================================================

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

// Componente de filtros del catálogo
import { CatalogFiltersComponent } from '../../../components/public/catalog-filters/catalog-filters';

// Tarjeta del producto
import { ProductCardComponent } from '../../../components/public/product-card/product-card';

// Servicio de productos
import { ProductService } from '../../../services/product';

// Interfaz del producto
import { Product } from '../../../interfaces/product.interface';

// Componente del buscador
import { CatalogSearchComponent } from '../../../components/public/catalog-search/catalog-search';

// Módulo para enlaces de formulario
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-catalog-page',

  standalone: true,

  imports: [

    CommonModule,
    CatalogFiltersComponent,
    ProductCardComponent,
    CatalogSearchComponent, 
    FormsModule

  ],

  templateUrl: './catalog.html',

  styleUrl: './catalog.css'

})

export class CatalogPageComponent implements OnInit, OnDestroy {

  // ======================================================
  // LISTA DE PRODUCTOS
  // ======================================================

  products: Product[] = [];

  filteredProducts: Product[] = [];

  sortOrder: string = 'relevance';

  // ======================================================
  // CONSTRUCTOR
  // ======================================================

  private routerSub?: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Router event:', event.urlAfterRedirects);
        if (event.urlAfterRedirects.includes('/catalog')) {
          console.log('Reloading products for /catalog');
          this.loadProducts();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  onSearch(search: string): void {

  this.productService.getProducts(search).subscribe({

    next: (products) => {

      this.products = products;

    },

    error: (error) => {

      console.error('Error al buscar productos:', error);

    }

  });

}

  // ======================================================
  // CARGAR PRODUCTOS DESDE LA API
  // ======================================================

  loadProducts(): void {

    this.productService.getProducts().subscribe({

      next: (products) => {

        console.log( 'Productos recibidos desde la API:', products );

        this.products = products;
        this.filteredProducts = products;
        this.cd.detectChanges();

      },

      error: (error) => {

        console.error('Error al cargar los productos:', error);

      }

    });

  }

  // ======================================================
// APLICAR FILTROS
// ======================================================

sortProducts(): void {

  if (this.sortOrder === 'price-asc') {

    this.filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  else if (this.sortOrder === 'price-desc') {

    this.filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  }

}

applyFilters(filters: {
  categories: string[];
  brands: string[];
}): void {

  

  this.filteredProducts = this.products.filter(product => {

    // --------------------------------------------------
    // FILTRO POR CATEGORÍA
    // --------------------------------------------------

    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);


    // --------------------------------------------------
    // FILTRO POR MARCA
    // --------------------------------------------------

    const brandMatch =
      filters.brands.length === 0 ||
      filters.brands.includes(product.brand);


    // --------------------------------------------------
    // PRODUCTO CUMPLE LOS FILTROS
    // --------------------------------------------------

    return categoryMatch && brandMatch;

  });

  // --------------------------------------------------
  // Ordenar Productos
  //---------------------------------------------------

  this.sortProducts();

  
}
}

