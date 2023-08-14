import './CrudApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductosComponent from './ProductosComponent';
import ProductoIdComponent from './ProductoIdComponent';

export default function CrudApp() {
    return (
        <div className="CrudApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductosComponent />} />  
                    <Route path="/jpa/productos/:id" element={<ProductoIdComponent />} />                  
                </Routes>
            </BrowserRouter>
        </div>
    )
}





