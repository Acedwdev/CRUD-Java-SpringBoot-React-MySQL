package co.com.acedwdev.apirest.service;

import java.util.List;
import java.util.Optional;

import co.com.acedwdev.apirest.model.Producto;

public interface ProductoService {
	
	List<Producto> listarProductos();
	
	Producto guardar(Producto producto);
	
	Producto eliminar(Producto producto);
	
	Optional<Producto> encontrarPorID(Integer id);
}
