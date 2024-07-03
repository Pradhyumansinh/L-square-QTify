import React from "react";
import buttonStyle from "./Button.module.css"


const Button = ({ buttonText }) => {
    return (
        <button type="button" className={buttonStyle.giveFeedbackButton} id="giveFeedbackButton">
            {buttonText}
        </button>
    );
}

export default Button;