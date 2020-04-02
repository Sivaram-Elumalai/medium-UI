import React from 'react'
import './Three-grid-article.css'
import post1 from '../../Assets/Images/mid1.jpeg'
import post2 from '../../Assets/Images/mid2.png'
import post3 from '../../Assets/Images/mid3.gif'

function Midpost() {
    return (
        <div>
            <div className="midpost">
                <img className="midpost-image" src={post1}></img>
                <div className='midpost-content'>
                    <div className="midpost-heading">7 Thought Patterns Holding You Back From the Life You Want</div>
                    <div className="midpost-author">Brianna Wiest in Human Parts</div>
                    <div className="midpost-date">Apr 1 . 7 mins read</div>
                </div>
            </div>
            <div className="midpost">
                <img className="midpost-image" src={post2}></img>
                <div className='midpost-content'>
                    <div className="midpost-heading">7 Thought Patterns Holding You Back From the Life You Want</div>
                    <div className="midpost-author">Brianna Wiest in Human Parts</div>
                    <div className="midpost-date">Apr 1 . 7 mins read</div>
                </div>
            </div>
            <div className="midpost">
                <img className="midpost-image" src={post3}></img>
                <div className='midpost-content'>
                    <div className="midpost-heading">7 Thought Patterns Holding You Back From the Life You Want</div>
                    <div className="midpost-author">Brianna Wiest in Human Parts</div>
                    <div className="midpost-date">Apr 1 . 7 mins read</div>
                </div>
            </div>
        </div>
    )
}

export default Midpost
