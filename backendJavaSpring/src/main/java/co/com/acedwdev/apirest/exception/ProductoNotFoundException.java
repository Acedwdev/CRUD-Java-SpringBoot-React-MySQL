package co.com.acedwdev.apirest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ProductoNotFoundException extends RuntimeException {
	
	public ProductoNotFoundException(String message) {
		super(message);
	}
}
