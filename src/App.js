import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import About from './pages/About';


function App() {
 

  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' exact element={<Home />}></Route>
        <Route path='/about' exact element={<About/>}></Route>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;

