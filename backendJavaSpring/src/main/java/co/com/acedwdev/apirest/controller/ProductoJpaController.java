package co.com.acedwdev.apirest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import co.com.acedwdev.apirest.exception.ProductoNotFoundException;
import co.com.acedwdev.apirest.model.Producto;
import co.com.acedwdev.apirest.service.ProductoService;


@RestController
public class ProductoJpaController {	
	
	private ProductoService productoService;

	public ProductoJpaController(ProductoService productoService) {
		super();
		this.productoService = productoService;
	}
	
	@GetMapping("/productos")
	public List<Producto> listaDeProductos(){
		return productoService.listarProductos();
	}
	
	@PostMapping
	public Producto ingresarProducto(@RequestBody Producto producto) {
		return productoService.guardar(producto);
	}
	
	@PutMapping("/producto/{id}")
	public Producto actualizar(@PathVariable int id, @RequestBody Producto producto) {		
		Optional<Producto> optionalProducto = productoService.encontrarPorID(id);
	    
	    if (optionalProducto.isEmpty()) {
	        throw new ProductoNotFoundException("id:" + id);  
	    }	    
	    
	    Producto productoExistente = optionalProducto.get();	    
	    
	    productoExistente.setNombre(producto.getNombre());
	    productoExistente.setDescripcion(producto.getDescripcion());
	    productoExistente.setPrecio(producto.getPrecio());	 
	    
	    Producto updatedProducto = productoService.guardar(productoExistente);    
	    
	    return updatedProducto;
	}
	
	@DeleteMapping("/producto/{id}")
	public Producto eliminar(@PathVariable int id, Producto producto) {
		return productoService.eliminar(producto);
	}
	
	@GetMapping("/producto/{id}")
	public Optional<Producto> encontrarPorId(@PathVariable int id){
		return productoService.encontrarPorID(id);
	}
	
	
}
