import React from 'react';

class GetData extends React.Component {
  
    state={
        headersPL:[]
    }

    URL = "./data.txt";
    
    componentDidMount(){
        // fetch(this.URL)
        // fetch("./data.json")
        fetch("https://pawelnowaklublin.pl/src/data/data.json")
        .then( response => {
            return response.json();
        })
        .then( data => console.log(data) ) 
        .catch( error => console.error(error));
    }
    render() { 
        return (
            <div>
                <h1>{console.log(this.state.headersPL)}</h1>
            </div>
        );
    }
}
 
export default GetData 