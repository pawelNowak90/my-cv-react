import React from 'react';
import { NavList, BtnHamburger }  from './';


const Nav = () => {
    return ( 
        <nav>
            <NavList/>
            <BtnHamburger value={"| | |"}/>
        </nav>
     );
}
 
export default Nav;