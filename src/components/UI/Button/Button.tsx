import React from "react";

import './Button.scss'

type ButtonProps = {
    children: React.ReactFragment,
    classes?: string,
    type?: "button" | "submit" | "reset",
    clickHandler: () => void
}

const Button: React.FC<ButtonProps> = ({children, classes, type, clickHandler}) => {
    const classNames = classes ? `btn ${classes}` : "btn"
    const buttonType = type || 'button'
    return (
        <button
            className={classNames}
            type={buttonType}
            onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default Button;