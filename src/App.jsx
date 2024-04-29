import React, { useState } from 'react'
import Nabar from './components/navbar/Nabar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from "./components/AboutUs/AboutUs"
import AsosiyBolim from './pages/AsasiyBolim/AsosiyBolim'
import SinglePage from './pages/product/SinglePage'
import Footer from "./components/footer/footer"
import Aloqa from './pages/Aloqa/Aloqa'
import MijonUchun from './pages/MijozUchun/MijonUchun'
import Buyurtmalarim from './pages/Buyurtmalarim/Buyurtmalarim'
export default function App() {
  return (
    <div>
      <div>
        <Nabar />
      </div>
      <Routes>
        <Route path='/' element={<AsosiyBolim />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='mijonUchun' element={<MijonUchun />} />
        <Route path='aloqa' element={<Aloqa />} />
        <Route path='singlePage/:id' element={<SinglePage />} />
        <Route path='buyurtmalarim' element={<Buyurtmalarim/>}/>
      </Routes>
      <Footer />
    </div>
  )
}


