import React from 'react';

const H1 = (props) => {
    return ( 
        <h1> #{props.number+1} - {props.header}</h1>
     );
}
 
export default H1;