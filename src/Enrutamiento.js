import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ipad from "./components/Pages/Iphone";
import Iphone from "./components/Pages/Ipad";
import Mackbook from './components/Pages/Mackbook'
import Watch from "./components/Pages/Watch";
import Accesorios from './components/Pages/Accesorios'
import ServicioTecnico from './components/Pages/ServicioTecnico'
import Cart from "./components/Pages/Cart";
import NavBar from "./components/NavBar";



const Enrutamiento = () =>{
    return(
        
    <BrowserRouter>

        <NavBar/>

            <Routes>
                <Route exact path = "/Ipad" element = {<Iphone/>}/>
                <Route exact path = "/Iphone" element = {<Ipad/>}/>
                <Route exact path = "/Mackbook" element = {<Mackbook/>}/>
                <Route exact path = "/Watch" element = {<Watch/>}/>
                <Route exact path = "/Accesorios" element = {<Accesorios/>}/>
                <Route exact path = "/ServicioTecnico" element = {<ServicioTecnico/>}/>
                <Route exact path = "/Cart" element = {<Cart/>}/>
            </Routes>

    </BrowserRouter>      
         
    )
}

export default Enrutamiento;