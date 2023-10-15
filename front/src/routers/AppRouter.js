import React from 'react'
import NavBar from '../components/ui/NavBar'
import Media from '../components/media/Media'
import Directors from '../components/directors/Directors'
import Types from '../components/types/Types'
import Productors from '../components/productors/Productors'
import Genders from '../components/genders/Genders'
import { Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    
    <div>
        <NavBar/>
        <div className='container'>
        <Routes>
            <Route path='/' element={<Media/>}/>
            <Route path='/directors' element={<Directors/>}/>
            <Route path='/types' element={<Types/>}/>
            <Route path='/productors' element={<Productors/>}/>
            <Route path='/genders' element={<Genders/>}/>
        </Routes>
        </div>
    </div>
    
  )
}
