import './App.css';
// import '@csstools/normalize.css';
import React, { useState, useCallback } from 'react';
import Main from './components/main/Main.js';
import Header from './components/header/Header.js';

// import GetData from './data/GetData';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const pawelTheme = createMuiTheme(
)

function App() {
    
  return (
    <div className="App">
        {/* <GetData/> */}
        {/* <MuiThemeProvider theme={pawelTheme}>

            <Button color="primary" disabled> BUTTON </Button>
            <Box color="warning.main"> COS TAM JEST NAPISANE
                <Button> BUTTON inside </Button>
            </Box> 
        </MuiThemeProvider> */}

        {/* <Header/> */}
        <Main/>
    </div>
  );
}

export default App;