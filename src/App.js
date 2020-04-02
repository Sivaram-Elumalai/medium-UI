import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Threegridposts from './Components/Three-grid-articles/Threegridposts'

function App() {
    return (
        <div className='App'>
           <Navbar/> 
           <Threegridposts/>
        </div>
    )
}

export default App
