import React from 'react'
import Home from './Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Player from './Pages/Player/Player.jsx'
const App = () => {
  return (
    <div>
      {/* movie web trailer */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>

      </Routes>
     
    </div>
  )
}

export default App
