import { Routes } from '@angular/router';


//Public 

import { HomePageComponent } from './pages/public/home/home';
import { CatalogPageComponent } from './pages/public/catalog/catalog';
import { CategoriesPageComponent } from './pages/public/categories/categories';
import { AboutPageComponent } from './pages/public/about/about';
import { ContactPageComponent } from './pages/public/contact/contact';
import { ProductDetailPageComponent } from './pages/public/product-detail/product-detail';

//Admin

import { LoginPageComponent } from './pages/admin/login/login';
import { DashboardPageComponent } from './pages/admin/dashboard/dashboard';
import { UsersPageComponent } from './pages/admin/users/users';
import { ProductsPageComponent } from './pages/admin/products/products';
import { InventoryPageComponent } from './pages/admin/inventory/inventory';
import { SalesPageComponent } from './pages/admin/sales/sales';
import { BrandsPageComponent } from './pages/admin/brands/brands';
import { SettingsPageComponent } from './pages/admin/settings/settings';
import { CategoriesPageComponent as AdminCategories } from './pages/admin/categories/categories';


//Public routes

export const routes: Routes = [

    {path: '', component: HomePageComponent},
    {path: 'catalog/:id', component: CatalogPageComponent},
    {path: 'categories', component: CategoriesPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'product-detail', component: ProductDetailPageComponent},



//Admin routes
    {path: 'admin/login', component: LoginPageComponent},
    {path: 'admin/dashboard', component: DashboardPageComponent},
    {path: 'admin/users', component: UsersPageComponent},
    {path: 'admin/products', component: ProductsPageComponent},
    {path: 'admin/inventory', component: InventoryPageComponent},
    {path: 'admin/sales', component: SalesPageComponent},
    {path: 'admin/brands', component: BrandsPageComponent},
    {path: 'admin/settings', component: SettingsPageComponent},
    {path: 'admin/categories', component: AdminCategories},


//Route not found/ruta no encontrada

    {path: '**', redirectTo: '' },

];
