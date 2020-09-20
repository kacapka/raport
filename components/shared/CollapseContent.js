import { Fragment, useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from '../shared/Button';

const CollapseContent = ({ children }) => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <Fragment>
            <Button onClick={toggleItem} className="desc-button" />
            <Collapse isOpened={isOpen}>
                {children}
            </Collapse>
        </Fragment>
    );

};

export default CollapseContent;