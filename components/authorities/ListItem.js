import { useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from '../shared/Button';

const LisItem = ({ data: { logo, company, name, className }, children }) => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <div className="authorities-item">
            <div className="authorities-item__wrapper">
                <div className="authorities-item__details">
                    <p className="authorities-item__company">{company}</p>
                    <p className="authorities-item__name">{name}</p>
                </div>
                <img src={logo} className={`authorities-item__logo authorities-item__logo-${className}`} />
            </div>
            <Button onClick={toggleItem} className="authorities-item__trigger" />
            <Collapse isOpened={isOpen}>
                <div className="authorities-item__content">
                    {children}
                </div>
            </Collapse>
        </div>

    );
};

export default LisItem;