import { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';import Contact from './Pages/Contact';
import Stocks from './Pages/Stocks';
import AboutUs from './Pages/AboutUs';
import Sell from './Pages/Sell';
import 'typeface-lato';
import 'typeface-poppins';
import 'typeface-montserrat';
import 'typeface-oswald';
import CarContextProvider from './Context/carContext';
import Garage from './Pages/Garage';
import Details from './Pages/Details';


function App() {

  return (
    <>
    
      <div className='w-screen h-auto flex flex-col items-center text-slate-200 top-0 bg-slate-900 font-oswald tracking-widest'>
        <CarContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/stocks' element={<Stocks/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/sell' element={<Sell/>}></Route>
            <Route path='/garage' element={<Garage/>}></Route>
            <Route path='/details/:carname' element={<Details/>}></Route>
          </Routes>
        </Router>
        </CarContextProvider>
      </div>
      
    </>
  )
}

export default App;
