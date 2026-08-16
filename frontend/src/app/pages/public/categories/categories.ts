import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryService } from '../../../services/category';
import { CategoryInterface } from '../../../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class CategoriesPageComponent implements OnInit {

  // ======================================================
  // LISTA DE CATEGORÍAS
  // ======================================================

  categories: CategoryInterface[] = [];


  // ======================================================
  // CONSTRUCTOR
  // ======================================================

  constructor(
    private categoryService: CategoryService
  ) {}


  // ======================================================
  // CARGAR CATEGORÍAS
  // ======================================================

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe({

      next: (categories) => {

        this.categories = categories;

      },

      error: (error) => {

        console.error(
          'Error al cargar las categorías:',
          error
        );

      }

    });

  }

}