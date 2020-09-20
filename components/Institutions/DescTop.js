import { Fragment, useState } from 'react';
import { Collapse } from 'react-collapse';
import useMedia from '../hooks/useMedia';
import Button from '../shared/Button';

const Content = () => (
    <Fragment>
        <p className="desc-text">
            The national requirements for conducting financial market activities focus primarily on issues such as:
            </p>
        <ul className="desc-list">
            <li>
                • the legal form of the business activity,
                </li>
            <li>
                • the share capital amount and the provision of adequate funds,
                </li>
            <li>
                • the introduction of organisational mechanisms ensuring that a given entity operates in accordance with the law, i.e. in particular risk management, internal control or compliance systems,
                </li>
            <li>
                • the requirements relating to education, professional experience or clean criminal record of managers who occupy key positions or have significant ownership interests,
                </li>
            <li>
                • the establishment of a programme of activities and a financial plan for the first few years of operation.
                </li>
        </ul>
        <p className="desc-text">
            Below are examples of requirements for obtaining an operating licence/permit for different financial sector entities. In addition to the requirements indicated below, it may be necessary to comply with other regulatory requirements before starting a business activity, such as presenting the articles of association, the business plan, documents proving the possession of sufficient financial resources to start a business activity or the identification of personal data of managers and persons who hold a significant capital share in the company, either directly or indirectly.
            </p>
    </Fragment>
);

const CollapseContent = () => {
    const [isOpen, toggle] = useState(false);

    const toggleItem = () => {
        toggle(prev => !prev);
    };

    return (
        <Fragment>
            <Button onClick={toggleItem} className="desc-button" />
            <Collapse isOpened={isOpen}>
                <Content />
            </Collapse>
        </Fragment>
    );

};

const DescTop = () => {
    const { isTablet } = useMedia();

    return (
        <div className="container--small desc desc--top">
            <p className="desc-text">
                The Polish legal system defines the regulatory framework for conducting operations by entities established and operating under the Polish law, and by entities from other countries of the European Economic Area (EEA) operating in Poland as a branch or as part of cross-border activities on the basis of a notification (the so-called passporting) addressed to the KNF.
            </p>
            {isTablet ? <CollapseContent /> : <Content />}
        </div>
    );
};

export default DescTop;