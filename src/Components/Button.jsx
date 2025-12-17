import React from "react";
import './button.css'

// primary, secondary , outline
const Button = ({ variant = 'primary', children,className, ...props }) => {
    let classNames = ''

    switch (variant) {
        case 'secondary':
            classNames = 'secondary-btn';
            break;
        case 'outline':
            classNames = 'outline-btn';
            break;
        default:
            classNames = 'primary-btn';
            break;
    }
    return (<button className={`button ${classNames} ${className}`}
        {
        ...props
        } >
        {children}
    </button>
    );
};
export default Button;