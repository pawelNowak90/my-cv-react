import React from 'react';
import './Section.css';
import H1 from '../utils/H1';

const Section = ({header, number}) => {
    return ( 
        <section>
            <H1 header={header} number={number} />
        </section>
     );
}
 
export default Section;