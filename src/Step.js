import React from "react";
import './Step.css';

function Step(props) {

    return(
        <div className="step-panel">
            <input className="input" type="number" onChange={(e) => {props.inputStep(e.target.value)}}></input>
        </div> 
    );
}

export default Step;

