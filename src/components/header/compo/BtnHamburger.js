import React from 'react';

import styled from 'styled-components';

const BtnHamburgerWrapper = styled.button`
padding: .25rem .75rem;
font-size: 1.25rem;
line-height: 1;
background-color: transparent;
border: 1px solid transparent;
border-radius: .25rem;
color:red;
`

const BtnHamburger = (props) => {
    return ( 
        <BtnHamburgerWrapper> {props.value} </BtnHamburgerWrapper>
     );
}
 
export default BtnHamburger;