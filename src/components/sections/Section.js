import React from 'react';
import './Section.css';
import { H1 } from '../utils';

import { Button } from '@material-ui/core';
import styled from 'styled-components'

const SectionWrapper = styled.section`
overflow: hidden;
height:50vh;
margin:10px;
background-color: #777;

@media (max-width: 991px) {
  margin-top: 0;
}

&.bg-gray {
    background-color: #222;
}
`

const Section = ({header, number, className}) => {
    return ( 
        <SectionWrapper className={className}>
            <H1 header={header} number={number} />
        </SectionWrapper>
     );
}

export default Section;