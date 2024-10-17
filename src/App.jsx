import { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';import Contact from './Pages/Contact';
;

function App() {

  return (
    <>
      <div className='w-screen h-auto flex flex-col items-center top-0 bg-gray-800 font-custom tracking-widest'>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
