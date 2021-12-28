import {useState, useEffect} from 'react';
import Productos from "./DB";
import '../estilos.css';
import {Link} from 'react-router-dom'

function Inicio () {
    
    const URL = Productos;

    // const agregar = (e) =>{
    //     let productoSeleccionado = e.target.parentElement;
    //     console.log(productoSeleccionado);
    //  }

    const [producto, setProducto] = useState([])

    const rederizar = () => {

        const promesa = new Promise (( resolve, reject) => {

            setTimeout(() =>{
                if (URL !== null) {
                    resolve(URL)
                }else{
                    reject('error')
                }
               
            }, 2000)
    })
    promesa.then( respuesta => setProducto(respuesta)).catch( error => (error))

    }

    useEffect(() =>{
        rederizar()
    })
    

   
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {producto.map(producto =>
               
               <div key = {producto.id} className="contenedorTarjeta">
                        <div className="contenedorImagen">
                        <img src= {producto.img} alt={producto.nombre}/>
                        </div> 

                    <div className='contenedorInfo'>
                        <h5 className="titulo">{producto.nombre}</h5>
                        <span className="precio">{producto.precio}</span>
                        <p>Descripción</p>
                        <Link to ={producto.detail} >Ver Detalle</Link>
                    </div>   
        
                 </div>
            )} 

        </div>
    )

          
}

export default Inicio;





