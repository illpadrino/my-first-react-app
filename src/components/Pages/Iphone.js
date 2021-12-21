import { useState } from 'react';

import Iphone13 from '../Img/Iphone13.png'
import {ContenedorProducto, Img, NombreProducto, ContenedorBtn, BtnMas, BtnMenos, Cantidad} from './StyleCard';

const Iphone = () =>{

    const stock = 5;
    
    const [contador, setContador] = useState(1);
    
    const aumentar = () =>{
        setContador(contador < stock ? contador + 1 : stock )
    }

    const disminuir = () =>{
        setContador(contador > 1 ? contador -1 : contador )
    }

    return(
        <ContenedorProducto>
            
            <NombreProducto>Iphone 13</NombreProducto>
            <Img src = {Iphone13}/>
            <ContenedorBtn>
                <BtnMas onClick={aumentar}>+</BtnMas>
                <Cantidad>{contador}</Cantidad>
                <BtnMenos onClick={disminuir}>-</BtnMenos>
            </ContenedorBtn>
        </ContenedorProducto>     
    );
}

export default Iphone;
