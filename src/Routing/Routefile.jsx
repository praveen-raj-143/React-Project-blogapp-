import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import Hollywood from '../Pages/Hollywood'
import Technology from '../Pages/Technology'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import Article from '../Pages/Article'
import Home from '../Pages/Home/Home'
const Routefile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/article/:id' element={<Article/>}/>
    </Routes>
  )
}

export default Routefile