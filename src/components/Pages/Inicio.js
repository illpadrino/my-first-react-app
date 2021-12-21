import {useState, useEffect} from 'react';
import Cart from "./Cart";
import Productos from "./DB";

function Inicio () {
    

    const agregar = (e) =>{
        let productoSeleccionado = e.target.parentElement;
        console.log(productoSeleccionado);
        <Cart seleccionado = {productoSeleccionado}/>
     }


   
    return(
        <div>
         
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {
                    
                    Productos.map(producto =>{
                        return(
                           
                            <div style={{margin: '20px'}}>
                    
                                <div style={{width: "200px"}}>
                                    <img style={{maxHeight: "8rem"}} 
                                    src= {producto.img}/>
                                </div>
                                <h5> {producto.nombre}</h5>
                                <div><span>{producto.precio}</span></div>
                                <button onClick={agregar}>añadir producto</button>
                            </div>
                        )
                    })
                }
            </div>
         
        </div>

        
    )
}

export default Inicio;