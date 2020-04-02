import React from 'react'
import './Three-grid-article.css'
import post1 from "../../Assets/Images/post2.jpeg"

function Majorpost() {
    return (
        <div className="majorposts">
            <img className="major1-image" src={post1}></img>
            <div className="major-content">
                <div className="major-heading">7 Thought Patterns Holding You Back From the Life You Want</div>
                <div className="major-description">‘I am responsible for any problem in my proximity,’ and other lies we tell ourselves</div>
                <div className="major-author">Brianna Wiest in Human Parts</div>
                <div className="major-date">Apr 1 . 7 mins read</div>
            </div>
            
        </div>
    )
}

export default Majorpost
