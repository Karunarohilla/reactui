import React from 'react'
import '../assets/css/style.css'


export const Socialmedia = () => {
    
    const changeColor = (e) => {
        
        if(e.target.getAttribute('class') === 'far fa-heart'){
            e.target.setAttribute('class', 'fas fa-heart')
            e.target.setAttribute('style', 'color: #f00')
        }else{
            e.target.setAttribute('class', 'far fa-heart')
            e.target.setAttribute('style', 'color: #000')
        }

        // if(e.target.getAttribute('class')=='far fa-heart'){
        //     e.target.setAttribute('class', 'fas fa-heart')
        // }else{
        //     e.target.setAttribute('class', 'far fa-heart')
        // }
        
        // alert(e.target)       
    }

    return(
        <>
            <div className="post-meta">
                <button className="post-meta-like">
                    <i className="far fa-heart" onClick={changeColor}></i>
                    <span>You and 201 people like this</span>
                    <strong>201</strong>
                </button>
                <ul className="comment-share-meta">
                    <li>
                        <button className="post-comment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                        </svg>
                            <span>41</span>
                        </button>
                    </li>
                    <li>
                        <button className="post-share">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg>
                            <span>07</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}