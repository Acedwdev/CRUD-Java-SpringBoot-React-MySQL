import { apiClient } from './ApiClient';

export const mostrarTodosLosProductos 
= () => apiClient.get(`/jpa/productos`);
   //http://localhost:8080/jpa/productos

export const deleteProductoApi 
= (id) => apiClient.delete(`/jpa/productos/${id}`);
   //http://localhost:8080/jpa/productos/id

export const mostrarProductoApi 
   = (id) => apiClient.get(`/jpa/productos/${id}`);

export const actualizarProductoApi
   = ( id, producto) => apiClient.put(`/jpa/productos/${id}`, producto)

export const createProducto
   = ( producto) => apiClient.post(`/jpa/productos`, producto)

   