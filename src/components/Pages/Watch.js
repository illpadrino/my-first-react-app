import { useState } from 'react';

import reloj1 from '../Img/reloj1.jpg'
import {ContenedorProducto, Img, NombreProducto, ContenedorBtn, BtnMas, BtnMenos, Cantidad} from './StyleCard';


const Watch = () =>{
    const [contador, setContador] = useState(1);

    const stock = 5;

    const aumentar = () =>{
        setContador(contador < stock ? contador + 1 : stock )
    }

    const disminuir = () =>{
        setContador(contador > 1 ? contador -1 : contador )
    }

    return(
        <ContenedorProducto>
            
            <NombreProducto>Watch</NombreProducto>
            <Img src = {reloj1}/>
            <ContenedorBtn>
                <BtnMas onClick={aumentar}>+</BtnMas>
                <Cantidad>{contador}</Cantidad>
                <BtnMenos onClick={disminuir}>-</BtnMenos>
            </ContenedorBtn>
        </ContenedorProducto>     
    );
}

export default Watch;