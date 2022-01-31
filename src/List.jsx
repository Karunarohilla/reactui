// import React, { useState } from 'react';
// import { ProgressPlugin } from 'webpack';
import React, { useState } from "react";

const List =(props)=>{

    const [line, setLine]=useState(false);

    const cutIt=()=>{
        setLine(true);
    };

    return(

        <>
            <div>
                <span onClick={cutIt}>Delete</span>
                <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
            </div>
        </>
    );
}

export default List;