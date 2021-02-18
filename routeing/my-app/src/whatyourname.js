import React, { useState, useEffect } from 'react';

function WhatName() {
    let [name , setCount] = useState('what your name');
    function nameinput() {
        let newName= document.querySelector('input').value;
        if(newName){
            console.log(newName);
            setCount(newName);
        }
        
    }
    
    return (
        <div className='WhatName'>
            <br/>
            <input type='text' onChange={nameinput}></input>
            <h1>{name}</h1>
        </div>
    )
}

export default WhatName;