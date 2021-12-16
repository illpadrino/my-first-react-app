import { useState } from 'react';

import macbookremovebg from '../Img/macbookremovebg.png'
import {ContenedorProducto, Img, NombreProducto, ContenedorBtn, BtnMas, BtnMenos, Cantidad} from './StyleCard';

const Mackbook = () =>{
    const [contador, setContador] = useState(1);
    
    const aumentar = () =>{
        setContador(contador +1)
    }

    const disminuir = () =>{
        setContador(contador -1)
    }

    return(
        <ContenedorProducto>
            
            <NombreProducto>Macbook</NombreProducto>
            <Img src = {macbookremovebg}/>
            <ContenedorBtn>
                <BtnMas onClick={aumentar}>+</BtnMas>
                <Cantidad>{contador}</Cantidad>
                <BtnMenos onClick={disminuir}>-</BtnMenos>
            </ContenedorBtn>
        </ContenedorProducto>     
    );
}

export default Mackbook;