import React from 'react';
import './Main.css';
import Section from './sections/Section';
import SectionBanner from './sections/Section01-banner';

// import headersPL from '../data/headersPL';

const Main = () => {
    const headersPL=[
        "O mnie",
        "Technologie",
        "Portfolio",
        "Zainteresowania",
        "Kontakt",
    ];

    // const listing = () => {
    //     headersPL.map(li => <h1>{li}</h1>);
    // }
    return ( 
        <main>
            <SectionBanner/>
            {headersPL.map((li,index) =>
                <Section
                    header={headersPL[index]}
                    className={index%2 ? "bg-gray" : null}
                    number={index}
                    key={`sections-${index}`}
                />)}
        </main>
        
     );
}
 
export default Main;