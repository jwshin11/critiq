import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create</Link>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
