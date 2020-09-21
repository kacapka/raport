import { Fragment, useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from '../shared/Button';

const CollapseContent = ({ children, buttonColor }) => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <Fragment>
            <Button onClick={toggleItem} className="desc-button" buttonColor={buttonColor} />
            <Collapse isOpened={isOpen}>
                {children}
            </Collapse>
        </Fragment>
    );

};

export default CollapseContent;