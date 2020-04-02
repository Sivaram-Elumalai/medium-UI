import React from 'react'
import Majorpost from './Major-post'
import Midpost from './Mid-post'
import Majorpost2 from './Major-post2'
import './Three-grid-article.css'

function Threegridposts() {
    return (
        <div>
            <div className='threegridpost'>
                <Majorpost/>
                <Midpost/>
                <Majorpost2/>
            </div>
            <div className="edpick">
            SEE EDITOR’S PICKS
            </div>
            <hr/>
        </div>
        
    )
}

export default Threegridposts
