import { useState } from 'react';

import Iphone13 from '../Img/Iphone13.png'
import {ContenedorProducto, Img, NombreProducto, ContenedorBtn, BtnMas, BtnMenos, Cantidad} from '../Pages/StyleIphone';

const Iphone = (props) =>{
    
    const [contador, setContador] = useState(1);
    
    const aumentar = () =>{
        setContador(contador +1)
    }

    const disminuir = () =>{
        setContador(contador -1)
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
