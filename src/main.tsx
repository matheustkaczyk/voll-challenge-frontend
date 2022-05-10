import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import './index.scss'
import Provider from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
