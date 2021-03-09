import React, { useState, useRef, useEffect } from 'react';
// import { Nav, NavList } from './compo';
import Drawer from '../drawerUI/Drawer';
import Button from '@material-ui/core/Button';

const Header = () => {
    const [menuVisible, setVisible] = useState(
        false
    );


    return ( 
        <header>
            <Drawer/>
            <Button onClick={ () => setVisible(!menuVisible )}> Wylacz Menu </Button>
        </header>
     );
}
 
export default Header;