import React, { useEffect, useState } from 'react';

const TitleUseEffect =()=>{

    const [num, setNum]=useState(0);

    useEffect(()=>{
        document.title= `You clicked ${num} times`;
    })

    return(
        <>
            <h2>Title Use Effect</h2>
            <button  onClick={()=>{
                setNum(num+1);
            }}>Click me {num}</button>
        </>
    )
};

export default TitleUseEffect;
