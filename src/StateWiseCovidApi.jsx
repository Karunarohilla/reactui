import React, { useState } from 'react';

const StateWiseCovidApi=()=>{

    const [data, setData]=useState([]);
    const getCovidData=async(()=>{
        const res=await fetch('https://api.covid19india.org/data.json');
        const actualData=await res.json();
        setData(actualData.StateWise);
    })

    return(
        <>
            <h1>State Wise Covid Api</h1>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>State</td>
                        <td>Confirmed</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                        <td>Active</td>
                        <td>Updated</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default StateWiseCovidApi;
