import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      
      
      
      <Router>
        <Routes>
        <Route   path="/"element={<Login/>}/>
        </Routes>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        </Routes>
        
       
         
        
      </Router>
      
    </div>
  );
}

export default App;
