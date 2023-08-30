import React from "react" 

export default function StartButton({clickHandler, hidden}) {
    return (
        <button 
            className="start-button"
            type="button"
            onClick={clickHandler}
            hidden={hidden}
        >
            <span>Start</span> 
        </button>
    )
}