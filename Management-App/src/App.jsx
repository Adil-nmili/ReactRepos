import React from 'react'
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import {Button } from 'react-bootstrap'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
        <Button className='btn btn-primary'>Hello</Button>
    </div>
  )
}

export default App
