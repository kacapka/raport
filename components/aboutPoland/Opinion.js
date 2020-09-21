import { Fragment } from 'react';

import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';

const Content = () => {
    return (
        <Fragment>
            <p>
                When we were looking for a location for our first global business services hub in the Western Hemisphere back in early 2018, Poland emerged as the most suitable option. Sustainable access to high-quality talent in areas such as compliance, risk and technology was the key factor in our decision-making process. Two years later we have
                a team of over 600 experienced specialists providing high-end, knowledge-intensive services to our sister companies located around the bank’s global network. Our office in Warsaw is home to – among others – over 100 cybersecurity professionals, both engineers as well as project and risk management experts, who help protect
                the bank from cyber threats globally, as well as Haskell developers who create liquidity risk management solutions.
            </p>
            <p className="opinion-author">
                Author: Rowena Everson, CEO Poland & Head GBS Poland,
                Standard Chartered Bank
            </p>
        </Fragment>
    );
};

const Opinion = () => {
    const { isMobile } = useMedia();
    return (
        <section className="opinion">
            <div className="container opinion-container">
                <h2>Expert opinion</h2>
                {isMobile ? <CollapseContent><Content /></CollapseContent> : <Content />}
            </div>
        </section>
    );
};

export default Opinion;