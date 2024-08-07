import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateTitle from './pages/CreateTitle';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import MyLists from './pages/MyLists';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateTitle />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/my_lists' element={<MyLists/>} />
    </Routes>
  )
}

export default App