import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Login/Signin';
import Signup from './pages/Login/Signup';
import Provider from './context/provider';
import Home from './pages/Home';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
