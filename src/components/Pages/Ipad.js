import { useState } from "react";

import Ipad1 from '../Img/Ipad1.jpeg'

import {ContenedorProducto, Img, NombreProducto, ContenedorBtn, BtnMas, BtnMenos, Cantidad} from './StyleCard';

const Ipad = () =>{
    
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
            
            <NombreProducto>Ipad</NombreProducto>
            <Img src = {Ipad1}/>
            <ContenedorBtn>
                <BtnMas onClick={aumentar}>+</BtnMas>
                <Cantidad>{contador}</Cantidad>
                <BtnMenos onClick={disminuir}>-</BtnMenos>
            </ContenedorBtn>
        </ContenedorProducto>     
    );
}

export default Ipad;