import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return(
        <div className="buttons-panel">
            <button className="btn" onClick={() => {props.buttonMethod('add')}}>Ad {props.inputNumber}</button>
            <button className="btn" onClick={() => {props.buttonMethod('reinit')}}>ReInit</button>
            <button className="btn" onClick={() => {props.buttonMethod('reset')}}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;