package co.com.acedwdev.apirest.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.acedwdev.apirest.model.Producto;
import co.com.acedwdev.apirest.repository.ProductoRepository;
import co.com.acedwdev.apirest.service.ProductoService;

@Service
public class ProductoServiceImpl implements ProductoService{
	
	@Autowired
	private ProductoRepository productoRepository;

	@Override
	public List<Producto> listarProductos() {
		return productoRepository.findAll();
	}

	@Override
	public Producto guardar(Producto producto) {
		return productoRepository.save(producto);
	}

	@Override
	public Producto eliminar(Producto producto) {
		productoRepository.delete(producto);
		return producto;
	}

	@Override
	public Optional<Producto> encontrarPorID(Integer id) {
		Optional<Producto> encontrar = productoRepository.findById(id);
		return encontrar;
	}

}
