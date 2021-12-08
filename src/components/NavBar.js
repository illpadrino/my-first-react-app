import React, {useState} from 'react';

import { NavBarContainer, MenuContainer, Link, Enlace, Apple, Bag, MenuIcon, } from './StyleNavBar';

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

            <Apple><ImAppleinc/></Apple>

            <MenuContainer show = {toggle} >
                <Link><Enlace>¡phone</Enlace></Link>
                <Link><Enlace>¡pad</Enlace></Link>
                <Link><Enlace>mackbook</Enlace></Link>
                <Link><Enlace>watch</Enlace></Link>
                <Link><Enlace>accesorios</Enlace></Link>
                <Link><Enlace>servicio técnico</Enlace></Link>
            </MenuContainer>

            <Bag><BiShoppingBag/></Bag>

        </NavBarContainer>    
  );
}

export default NavBar;