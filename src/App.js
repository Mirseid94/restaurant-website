import './App.css';
import Eight from './components/eight/eight';
import Fifth from './components/fifth/fifth';
import Main from './components/main';
import Seven from './components/seven/seven';
import Sixth from './components/sixth/sixth';
import Second from './seconds/second';
import Third from './third/third';
import Thirth from './thirth/thirth';

function App() {
    return ( <div className = "App" >
        < Main/>
        <Second />
        <Third />
        <Thirth />
        <Fifth />
        <Sixth/>
        <Seven/>
        <Eight/>


        </div>
    );
}

export default App;