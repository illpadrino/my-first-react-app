import React, {useState} from 'react';
// import { Link, Outlet } from "react-router-dom";

import { NavBarContainer, MenuContainer, Li, Enlace, Apple, Bag, MenuIcon, StyleLink, } from './StyleNavBar';

import {ImAppleinc} from 'react-icons/im';

import {BiShoppingBag} from 'react-icons/bi';

import {GiHamburgerMenu} from 'react-icons/gi'

import {FaTimes} from 'react-icons/fa'



function NavBar() {

    const [toggle, setToggle] = useState(false);

  return (
  
        <NavBarContainer>

            <MenuIcon
             onClick={() => setToggle(!toggle)}>
             {toggle ? <FaTimes/> : <GiHamburgerMenu/>}
            </MenuIcon>

            <StyleLink to = "/Inicio"><Apple><ImAppleinc/></Apple></StyleLink>

            <MenuContainer show = {toggle} >
                <StyleLink to = "/Iphone">Iphone</StyleLink>     
                <StyleLink to = "/Ipad">Ipad</StyleLink>
                <StyleLink to = "/Mackbook">Macbook</StyleLink>
                <StyleLink to = "/Watch">Watch</StyleLink>
                <StyleLink to = "/Accesorios">Accesorios</StyleLink>
                <StyleLink to = "/ServicioTecnico">Servicio Técnico</StyleLink>
            </MenuContainer>
            
            <StyleLink to = "/Cart"><Bag><BiShoppingBag/></Bag></StyleLink>        

        </NavBarContainer>    
  );
}

export default NavBar;