import { useState } from "react";


function MouseText() {
    let [textWhenMouse,gomouse]= useState("");
    function mouseover() {
        gomouse("text on mouseover")
    }
    function mouseout() {
        gomouse("")
    }

    return(
        <div className="mouseover">
            <div style={{borderStyle:"dashed",margin:"0px 20%"}} onMouseOver={mouseover} onMouseOut={mouseout}>
            <h1 >
                mouse over my div
            </h1>
            </div>
            <div>
                {textWhenMouse}
            </div>
        </div>

    )
}

export default MouseText;