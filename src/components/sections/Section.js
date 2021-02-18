import React from 'react';
import './Section.css';
import H1 from '../utils/H1';

const Section = ({header}) => {
    return ( 
        <section>
            <H1 header={header} />
        </section>
     );
}
 
export default Section;