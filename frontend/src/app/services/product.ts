// =====================================================
// IMPORTACIONES
// =====================================================

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Interfaz del producto
import { Product } from '../interfaces/product.interface';

@Injectable({

  providedIn: 'root'

})

export class ProductService {

  // =====================================================
  // LISTA DE PRODUCTOS (SIMULACIÓN DEL BACKEND)
  // =====================================================

  private products: Product[] = [

  ];

  // =====================================================
// OBTENER PRODUCTOS DESDE LA API
// =====================================================

getProducts(buscar: string = ''): Observable<Product[]> {

  let params = new HttpParams();
  if (buscar.trim()!== '') {
    params = params.set('buscar', buscar.trim());
  }

  return this.http
    .get<any>('http://localhost:3000/api/v1/productos', { params })
    .pipe(

      map(response =>

        response.data.map((item: any) => ({

          id: item.id,

          name: item.nombre,

          description: item.descripcion,

          price: Number(item.precio),

          stock: item.stock,

          image: item.imagen ?? 'assets/products/no-image.jpg',

          brand: item.marca,

          category: item.categoria,

          active: true

        }))

      )

    );

}

  // =====================================================
// CONSTRUCTOR
// =====================================================

constructor(
  private http: HttpClient
) {}

}