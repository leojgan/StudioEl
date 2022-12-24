import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='contact' element={<ContactPage />} /> */}
            {/* <Route path='directory' element={<CampsitesDirectoryPage />} />
            <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
            <Route path='about' element={<AboutPage />} /> */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;