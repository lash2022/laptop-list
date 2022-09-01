import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MainForm from './components/MainForm';
import LaptopListing from './components/LaptopListing';
import Home from './components/Home';

function App() {
   
  return (
    <>
    
    <Routes>
        <Route path='/' exact element ={<Home/>} />
        <Route path='/form' element={<MainForm/>}/>
        <Route path='/listing' element={<LaptopListing/>}/>
    </Routes>
    </>
  );
}

export default App;
