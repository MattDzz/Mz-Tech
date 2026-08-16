import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CategoryInterface } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: CategoryInterface[] = [
    {
      id: 1,
      name: 'Mouse',
      description: 'Encuentra mouse para gaming y uso diario.'
    },

    {
      id: 2,
      name: 'Teclados',
      description: 'Teclados para gaming, trabajo y uso diario.'
    },

    {
      id: 3,
      name: 'Audífonos',
      description: 'Audífonos para gaming, música y entretenimiento.'
    },

    {
      id: 4,
      name: 'Monitores',
      description: 'Monitores para gaming, trabajo y entretenimiento.'
    }
  ];

  getCategories(): Observable<CategoryInterface[]>{
    return of(this.categories);
  }
}


