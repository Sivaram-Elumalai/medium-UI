import React from 'react'
import './Navbar.css'
import Search from './Icons/Search'
import Bookmark from './Icons/Bookmark'
import Notification from './Icons/Notification'
import Topics from './Topics'


function Navbar() {
    return (
        <div>
            <div className="nav"> 
            <div className='logo'>Medium</div>
                <div className='icons'>
                    <Search/>
                    <Bookmark/>
                    <Notification/>
                </div>
            </div>
            <Topics/>
        </div>
        
    )
}

export default Navbar
