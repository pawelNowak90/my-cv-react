import './App.css';
import Main from './components/Main.js';
import Header from './components/header/Header.js';
import Drawer from './components/drawerUI/Drawer';
import GetData from './data/GetData';

function App() {
  return (
    <div className="App">
        <GetData/>
        {/* <Drawer/> */}
        {/* <Header/> */}
        {/* <Main/> */}
    </div>
  );
}

export default App;
