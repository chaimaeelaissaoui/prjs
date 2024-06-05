import React, { useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './componenets/Footer/Footer'
import Loginpopup from './componenets/LoginPopup/Loginpopup'
  
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
  <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path ='/order' element={<PlaceOrder/>}/>
        
      </Routes>
    </div>
    <Footer/>
</>  )
}

export default App
