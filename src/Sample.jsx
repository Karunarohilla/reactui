import React, { useEffect, useState } from 'react';
const Sample=()=>{

    const [num, setNum]=useState(0);
    const [nums, setNums]=useState(0);

    useEffect(()=>{
        alert("I am Clicked")
    }, [num]);    
    return(
        <>
            <h1>Hello</h1>
            <button onClick={()=>{
                setNum(num+1);
            }}>Click me {num}</button>
            <br />
            <button onClick={()=>{
                setNums(nums+1);
            }}>Click me {nums}</button>
            <br />

        </>
    );
}
export default Sample;