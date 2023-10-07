import React from 'react'
import Navbar from './Navbar'
import { Routes ,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import News from './News'
import Coding from './Coding'
import Gallery from './Gallery'

const Main = () => {
  return (
   <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/coding' element={<Coding/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/news' element={<News/>}/>
            
        </Routes>
   </>
  )
}

export default Main
