import React from 'react';
import styled from 'styled-components';

const H1wrapper = styled.h1`
margin: 10px 0 30px 0;
color: #000;
text-transform: uppercase;
font-style: 34px;
letter-spacing: 2px;
// opacity: 0;
transform: scale(1.5);
transition: transform 0.5s linear, opacity 0.5s linear;
text-align: center;
font-size: 28px;

    @media (max-width: 991px) {
    font-size: 24px;
    }

    @media (max-width: 575px) {
    font-size: 22px;
    }
`

const H1 = (props) => {
    return ( 
        <React.Fragment>
            {/* <h1> #{props.number+1} - {props.header}</h1> */}
            <H1wrapper> #{props.number+1} - {props.header}</H1wrapper>
        </React.Fragment>
     );
}
 
export default H1;
