// import logo from './logo.svg';
import React from 'react';
import './App.css'; 
//import Add from './components/Add';
import PortHeader from './components/Portfolio/PortHeader';
import Navbar from './components/Navbar/Navbar';
import PortComposition from './components/Portfolio/PortComposition';
import Theme from './components/Portfolio/Theme';
import NewData from './components/Portfolio/NewData';
// import { route } from 'browser-router';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ReactDOM } from 'react';
import LandingPage from './components/Portfolio/LandingPage';

function App() {
  
  const addPortfolioData=(expenses)=>{
    console.log(expenses);
  }
  return (
    <div className="App">
       {/*  
      <Add/>
      <Try/>
      <PortComposition/>
      <PortHeader/>
       */}
      {/* <Routes> */}
      <Theme/>
      
      
      {/* <NewData onAddData={addPortfolioData}/> */}
      {/* <Navbar/> */}
      {/* <Route exact path='/' element={<LandingPage/>}></Route>
      
      <Route path='/portfolioheader' element={<PortHeader/>}></Route>
      <Route path='/theme' element={<Theme/>}></Route>
      <Route path='/portfoliocompostion' element={<PortComposition/>}></Route> */}
    {/* </Routes> */}

    </div>
  );
}

export default App;
