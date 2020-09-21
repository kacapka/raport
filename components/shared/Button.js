import { useState } from 'react';
import classnames from 'classnames';

const Button = ({ onClick, className, buttonColor }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(prev => !prev);
        onClick(!isOpen);
    };

    console.log(className);

    return (
        <div onClick={handleOnClick} className={classnames("button-read-more", { [`button-read-more--${buttonColor}`]: buttonColor, [className]: className })}>
            {!isOpen ? '↓ read more ↓' : '↑ close ↑'}
        </div>
    );
};

export default Button;