package co.com.acedwdev.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import co.com.acedwdev.apirest.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer>{
	
	

}
