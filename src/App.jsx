import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Services from './pages/Services'
import Suggestions from './pages/Suggestions'
import Requests from './pages/Requests'



function App() {
  

  return (
    <div className="font-sans flex flex-col min-h-screen">

      <Header />

      <Routes>
        <Route path='/' element={<Services/>} />
        <Route path='/sugerencias' element={<Suggestions/>} />
        <Route path='/reclamos' element={<Requests/>} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
