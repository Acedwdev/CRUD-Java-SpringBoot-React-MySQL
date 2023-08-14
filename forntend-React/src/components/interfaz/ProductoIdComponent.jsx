import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { createProducto, mostrarProductoApi } from "./api/CrudApi"
import { Formik, Form, Field } from "formik"
import { actualizarProductoApi } from "./api/CrudApi"


export default function ProductoIdComponent() {

    const { id } = useParams()

    const [nombre, setNombre] = useState('')

    const [descripcion, setDescripcion] = useState('')

    const [precio, setPrecio] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveProducto(),
        [id]
    )

    function retrieveProducto() {
        if(id != -1){
        mostrarProductoApi(id)        
        .then(response => {
            setNombre(response.data.nombre)
            setDescripcion(response.data.descripcion)
            setPrecio(response.data.precio)
        }   

        )
        .catch(error => console.log(error))
    }
    }

    function onSubmit(values) {
        console.log(values)
        const producto = {
            id: id,
            nombre: values.nombre,
            descripcion: values.descripcion,
            precio: values.precio
        }
        if(id == -1){
            createProducto(producto)
            .then(response => {
                navigate(`/`)
            }
            )
            .catch(error => console.log(error))
        }else{
        
        actualizarProductoApi(id, producto)
        .then(response => {
            navigate(`/`)
        }   
        )
        .catch(error => console.log(error))
    }
    }


    return (
        <div className="container">
            <h1>Actualizar Producto</h1>
            <div>
                <Formik initialValues={{nombre, descripcion, precio}} 
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                    {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Nombre</label>
                                <Field className="form-control" type="text" name="nombre"  />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Descripcion</label>
                                <Field className="form-control" type="text" name="descripcion"  />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Precio</label>
                                <Field className="form-control" type="text" name="precio"  />
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Guardar</button>
                            </div>

                        </Form>
                    )
                    }
                </Formik>
            </div>
            
        </div>
    )
}