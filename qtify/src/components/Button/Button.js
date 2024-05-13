import React from "react";
import "./Button.css"


const Button = ({ btnid }) => {
    return (
        <button type="button" className="giveFeedbackButton" id={btnid}>
            Give Feedback
        </button>
    );
}

export default Button;