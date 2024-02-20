import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './pages/Product'
import thumnail1Img from './assets/sci-fi-demo-thumbnail.jpg' 
import {Routes,Route,Outlet,Link} from 'react-router-dom'
import Checkout from './pages/Checkout'
import Success from './components/Success'

function Layout(){
  return(
    <>
      <Header title='DIGITAL MARKETPLACE'/>
      <Outlet/>
    </>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<Product title='Sci-Fi Game Assets' desc="lorem_ipsum_lorem_ipsum_lorem_ipsum_lorem_ipsum" images={[{src:thumnail1Img, alt:"Sci-Fi Assets Thumbnail"}]} price={12.99}/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path='success' element={<Success/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
