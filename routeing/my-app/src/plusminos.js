import React, { useState } from 'react';

function PlusMinus() {
    let [number,setnumber] = useState(0);

    function add1() {
        setnumber(number+1)
    }
    function minus1() {
        setnumber(number-1)
    }
    function reset() {
        setnumber(0)
    }
    return(
        <div>
            <h1>{number}</h1>
            
            <button onClick={add1}>add 1 </button>
            <button onClick={minus1}>minus 1 </button>
            <button onClick={reset}>reset </button>
        </div>
    )
}

export default PlusMinus;