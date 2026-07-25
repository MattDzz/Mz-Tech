// ======================================================
// INTERFAZ PRODUCTO
// Representa la información que recibiremos del backend.
// ======================================================

export interface Product {

    // Identificador único
    id: number;

    // Nombre del producto
    name: string;

    // Descripción
    description: string;

    // Precio
    price: number;

    // Cantidad disponible
    stock: number;

    // URL de la imagen
    image: string;

    // Marca
    brand: string;

    // Categoría
    category: string;

    // Indica si está activo
    active: boolean;

}