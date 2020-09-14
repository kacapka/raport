import { useState } from 'react';
import { Collapse } from 'react-collapse';
import classnames from 'classnames';

import hideIcon from '../../static/img/hide_icon.png';
import showIcon from '../../static/img/show_icon.png';

const LisItem = ({ title, children }) => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <div className="accordion-item">
            <div onClick={toggleItem} className="accordion-item__trigger">
                <div className={classnames("accordion-item__button", { "accordion-item__button--open": isOpen })}>
                    <img src={isOpen ? hideIcon : showIcon} />
                </div>
                <div className="accordion-item__label">{title}</div>
            </div>
            <Collapse isOpened={isOpen}>
                <div className="accordion-item__content">
                    {children}
                </div>
            </Collapse>
        </div>

    );
};

export default LisItem;