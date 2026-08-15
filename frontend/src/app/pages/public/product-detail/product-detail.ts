import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../../services/product';
import { Product } from '../../../interfaces/product.interface';



@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailPageComponent implements OnInit {

  // ======================================================
// CONSULTAR PRODUCTO POR WHATSAPP
// ======================================================

contactWhatsApp(): void {

  if (!this.product) {
    return;
  }

  const phoneNumber = '573002555909'; // numero de contacto de Whatsapp

  // Mensaje predefinido con la información del producto
  const message = ` 
Hola, estoy interesado en el siguiente producto:

Producto: ${this.product.name}
Marca: ${this.product.brand}
Categoría: ${this.product.category}
Precio: ${this.product.price}

¿Podrían brindarme más información?
`;

// Construir la URL de WhatsApp con el número de teléfono y el mensaje
  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');// Abrir en una nueva pestaña

}

  //====================================
  //Producto
  //====================================

  product: Product | undefined;

  //====================================
  //Estados de Carga
  //====================================

  loading: boolean = true;


  error: boolean = false; // Variable para indicar si hubo un error al cargar el producto

  //====================================
  //Constructor
  //====================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  //====================================
  //Inicializar Componente
  //====================================

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID del producto:', id); // Agrega este log para verificar el valor de id
    this.loadProduct(id);
  }

  //====================================
  //Cargar Producto
  //====================================

  loadProduct(id: number): void {
    console.log('Buscando producto...', id);

    if (!Number.isFinite(id) || id <= 0) {
      this.product = undefined;
      this.loading = false;
      this.error = true;
      return;
    }

    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log('Productos obtenidos:', products);

        const productFound = products.find(
          (product) => Number(product.id) === id
        );

        console.log('🎯 Producto encontrado:', productFound);

        this.product = productFound ?? undefined;
        this.error = !this.product;
        this.loading = false;

        console.log('Estado final del detalle:', {
          loading: this.loading,
          error: this.error,
          product: this.product,
        });

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('❌ Error al cargar producto:', error);
        this.loading = false;
        this.error = true;
        this.cdr.detectChanges();
      },
    });
  }

  //====================================
  //Volver al Catálogo
  //====================================

  backToCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}
