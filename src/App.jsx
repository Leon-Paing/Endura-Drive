import { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Home from './Home'

function App() {

  return (
    <>
      <div className='w-screen h-auto flex flex-col items-center top-0 bg-slate-900 font-custom tracking-widest'>
        <Home/>
      </div>
    </>
  )
}

export default App;
