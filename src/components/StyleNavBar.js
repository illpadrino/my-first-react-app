import styled from 'styled-components';


export const NavBarContainer = styled.header`
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: row-reverse;
    }
`

export const MenuContainer = styled.ul`
     display: flex;

    @media(max-width: 768px){
        display: ${({show}) => ( show ? "flex" : "none")}; 
        position: absolute;
        top: 70px;
        flex-direction: column;
        background-color: black;
    }
`

export const Link = styled.li`
    list-style: none;
    padding: 0 40px;

    @media(max-width: 768px){
        padding: 30px;
    }
`
export const Enlace = styled.a`
    text-transform: capitalize;
    text-decotation: none;
    color: white;
    font-family: verdana;
    cursor: pointer;

    &:hover{
        color: #D8D8D8;
    }
`
export const Apple = styled.div`
    color: white;
    font-size: 25px;

    @media (max-width: 768px){
        font-size: 35px;
    }
`

export const Bag = styled.div`
    color: white;
    font-size: 25px;
    cursor: pointer;
`

export const MenuIcon = styled.div`
    color: white;
    font-size: 25px;
    display: none;

    @media (max-width: 768px){
        display: flex;
        cursor: pointer;
    }
`
