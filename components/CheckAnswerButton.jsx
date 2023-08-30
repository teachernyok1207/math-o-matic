import React from "react"

export default function CheckAnswerButton({disabled,hidden}) {
    return (
        <button 
            className="check-answer-button" 
            type="submit"
            disabled={disabled}
            hidden={hidden}
        >
            <span>Check Answer</span>
        </button>
    )
}