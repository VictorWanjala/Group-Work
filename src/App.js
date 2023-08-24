
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Victor from './Victor';
import Mutanyi from './Mutanyi';
import Masibo from './Masibo';
import Mercy from './Mercy';
import William from './William';
import Home from './Home';


function App() {
  return (
    <div className="App">

      <button><Link to='/home'>HOME</Link></button> 
      <button><Link to='/mutanyi'>MUTANYI</Link></button> 
      <button><Link to='/masibo'>MASIBO</Link></button>
      <button><Link to='/mercy'>MERCY</Link></button>
      <button><Link to='/william'>WILLIAM</Link></button>
      <button><Link to='/victor'>VICTOR</Link></button>
     

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mutanyi' element={<Mutanyi/>}/>
        <Route path='/masibo' element={<Masibo/>}/>
        <Route path='/mercy' element={<Mercy/>}/>
        <Route path='/william' element={<William/>}/>
        <Route path='/Victor' element={<Victor/>}/>
        
      
      </Routes>
    </div>
  );
}

export default App;
