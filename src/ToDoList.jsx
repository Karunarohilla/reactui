import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList =()=>{

    const [num, setNum]=useState(0);
    
    const incNum =()=>{
        setNum(num+1);

    };
    const decNum =()=>{
        if(num>0){
            setNum(num-1);
        }
        else{
            alert('number cannot be negative');
            setNum(0);
        }
    };

    return(
        <>
            <h1>{num}</h1>
            <button onClick={incNum}><AddIcon /></button>
            <button onClick={decNum}><DeleteIcon /></button>
        </>
    );

}

export default ToDoList;