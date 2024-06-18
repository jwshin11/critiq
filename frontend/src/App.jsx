import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateTitle from './pages/CreateTitle';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateTitle />} />
    </Routes>
  )
}

export default App