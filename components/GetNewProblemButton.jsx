import React from "react"

export default function GetNewProblemButton({clickHandler, disabled, hidden}) {
    return (
        <button 
            type="button" 
            className="new-problem-button" 
            onClick={clickHandler}
            disabled={disabled}
            hidden={hidden}
        >
            <span>New Problem</span>
        </button>
    )
}