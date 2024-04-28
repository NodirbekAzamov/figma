import React, { useState } from 'react'
import Nabar from './components/navbar/Nabar'
import { Route, Routes } from 'react-router-dom'
// import Aloqa from './components/Aloqa/Aloqa'
import AboutUs from "./components/AboutUs/AboutUs"
import Product from './components/product/Product'
import Choynak from './components/product/Mahsulot/choynak/Choynak'
import AsosiyBolim from './components/AsasiyBolim/AsosiyBolim'
import SinglePage from './components/product/SinglePage'
import Footer from "./components/footer/footer"
export default function App() {

  return (
    <div>
      <div>
        <Nabar />
      </div>
      <Routes>

        <Route path='/' element={<AsosiyBolim />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='product' element={<Product />} />
        <Route path='/' element={<Choynak />} />
        <Route path='singlePage/:id' element={<SinglePage />} />
        {/* <Route path='footer' element={<Footer />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}


