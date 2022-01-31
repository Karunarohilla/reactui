import React, { useState } from 'react';
import List from './List';
const ToDoLists=()=>{

  const [item, setItem]  =useState("");
  const [newItem, setNewItem]=useState([]);
  

    const itemEvent =  (event)=>{
        setItem(event.target.value);
    }

    const listOfItems =()=>{
        setNewItem((prevValue)=>{
            return[...prevValue, item];
        })
        setItem(" ");
    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h2>ToDoList</h2>    
                    <br />
                    <input type="text" placeholder="Add an Item" value={item} onChange={itemEvent}  />
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {newItem.map((val, index)=>{
                            return <List key={index} text={val} />
                        })}
                    </ol>

                </div>
            
            </div>
            

        </>
    );
}

export default ToDoLists;