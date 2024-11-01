import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Catalog />
    <Footer />
    <Profile />
    </>
  )
}

export default App