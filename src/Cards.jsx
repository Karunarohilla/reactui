import React from 'react';

const Cards =(props)=>{

    return(
        <>
            <div className='cards'>
                <div className="card">
                    <img src={props.imgsrc} alt="myImage" title="Netflix Image" />
                    <h3>{props.title}</h3>
                    <p>{props.sname}</p>
                    <a href={props.link}>Watch Now</a>
                
                </div>
            
            </div>
        </>
    );
}

export default Cards;