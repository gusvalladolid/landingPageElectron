/* eslint-disable prettier/prettier */
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import Home from './views/home.jsx'
import AboutUs from './views/aboutUs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
