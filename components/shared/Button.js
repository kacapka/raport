import { useState } from 'react';
import classnames from 'classnames';

const Button = ({ onClick, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(prev => !prev);
        onClick(!isOpen);
    };

    return (
        <div onClick={handleOnClick} className={classnames("button-read-more", className)}>
            {!isOpen ? '↓ read more ↓' : '↑ hide ↑'}
        </div>
    );
};

export default Button;