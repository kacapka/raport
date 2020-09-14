import { useState } from 'react';
import { Collapse } from 'react-collapse';
import classnames from 'classnames';
import Button from '../shared/Button';

const LisItem = ({ data: { logo, company, name, className }, children }) => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <div className="authorities-item">
            <div className="authorities-item__wrapper">
                <img src={logo} className={`authorities-item__logo authorities-item__logo-${className}`} />
                <p className="authorities-item__company">{company}</p>
                <p className="authorities-item__name">{name}</p>
                <Button onClick={toggleItem} className="authorities-item__trigger" />
            </div>
            <Collapse isOpened={isOpen}>
                <div className="authorities-item__content">
                    {children}
                </div>
            </Collapse>
        </div>

    );
};

export default LisItem;