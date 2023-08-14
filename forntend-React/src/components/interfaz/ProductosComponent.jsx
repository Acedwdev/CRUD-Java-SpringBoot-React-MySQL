import { useEffect, useState } from "react"
import { mostrarTodosLosProductos, deleteProductoApi } from "./api/CrudApi"
import { useNavigate } from "react-router-dom"

export default function ProductosComponent(){

const [productos, setProductos] = useState([])

const [message, setMessage] = useState(null)

const navigate = useNavigate()

useEffect( () => refreshProductos(), [] )

function refreshProductos() {    
    mostrarTodosLosProductos()
    .then(response => {
        setProductos(response.data)
    })
    .catch(error => console.log(error))
    
}

function deleteProducto(id) {
    console.log('borrar producto' + id)
    deleteProductoApi(id)
    .then(response => {
        setMessage(`borrar producto con id = ${id} exitoso`)
        refreshProductos()
    }
    )
    .catch(error => console.log(error))
}

function updateProducto(id) {
    console.log('Producto actualizado' + id)
    navigate(`/jpa/productos/${id}`)
}

/*
function agregarProducto() {
    navigate(`/jpa/productos/-1`)
}
*/

const agregarProducto = () => {
    navigate(`/jpa/productos/-1`)
}

 return (
     <div className="container">
         <h1>Productos</h1>  
         {message && <div className='alert alert-success'>{message}</div>}                      
         <div>
             <table className="table">
                 <thead>
                     <tr>
                         <td>Id</td>
                         <th>Nombre</th>
                         <th>Description</th>
                         <th>Precio</th>
                         <th>Delete</th>
                         <th>Update</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         productos.map(
                             producto => (
                                 <tr key={producto.id}>
                                     <td>{producto.id}</td>
                                     <td>{producto.nombre}</td>
                                     <td>{producto.descripcion}</td>                                                                             
                                     <td>{producto.precio}</td>
                                     <td> <button className="btn btn-warning"
                                                      onClick={() => deleteProducto(producto.id)}>Delete</button></td>
                                     <td> <button className="btn btn-success"
                                                      onClick={() => updateProducto(producto.id)}>Update</button></td>
                                 </tr>
                             )
                         )
                     }
                 </tbody>

             </table>
         </div>
         <div className="btn btn-success m-5" onClick={agregarProducto}>Agregar Producto</div>
     </div>
 )
}

