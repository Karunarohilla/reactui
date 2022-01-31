import React, { useState } from "react";

const App = ()=>{

  const [fullName, setFullName]=useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });

  const inputEvent=(event)=>{
    const {value, name}=event.target;
    setFullName((preValue)=>{
      return{
        ...preValue,
        [name]: value
      };
    });
  };

  const onSubmits=(event)=>{
    event.preventDefault();
    alert('Form Submittted');
  }

  return(
    <>
      <h1>Input forms using Spread Operator in React JS</h1>
      <form className="" onSubmit={onSubmits}>

        <p>hello {fullName.fname} {fullName.lname}</p>
        <p>Email {fullName.email}</p>
        <p>Phone {fullName.phone}</p>
        <input type="text" placeholder="Enter First Name" onChange={inputEvent} name="fname" />
        <br/>
        <input type="text" placeholder="Enter Last Name" onChange={inputEvent} name="lname" />
        <br/>
        <input type="email" placeholder="Enter Email ID" onChange={inputEvent} name="email" />
        <br/>
        <input type="number" placeholder="Enter Mobile Number" onChange={inputEvent} name="phone" />
        <br/>

        <button type="submit">Submit</button>

      </form>
    </>

  );
}

export  default App;


// const App =()=>{

//   let ctime=new Date().toLocaleTimeString();
//   const [currentDate, setCurrentDate]=useState('currentDate');

//   const updateTime=()=>{
//     ctime=new Date().toLocaleTimeString();
//     setCurrentDate(ctime);
//   };

//   setInterval(updateTime, 1000);


//   return(
//     <>
//       <h3>Show Current date by React Hooks</h3>
//       <h2>Today's date is {currentDate}</h2>

//     </>
//   );

// }

// export default App;


// import React from 'react';
// import './App.css';
// import Cards from './Cards';
// import Sdata from './Sdata';

// // import { iteratorSymbol } from 'immer/dist/internal';

// const App = ()=>{

//   return(
//     <>
//       <h1>Top 5 Netflix series in React JS</h1>
//       {Sdata.map((val)=>{
//         return(
//           <Cards  imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
//         );
//       })}
//     </>
//   );
  
// }

// export default App;
