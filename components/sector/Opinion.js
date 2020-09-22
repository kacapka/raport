import { Fragment } from 'react';

import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';

const Content = () => {
    return (
        <Fragment>
            <p className="with-margin">
                The domestic financial sector employs a total of over 154,000 people, operates a network of
                6,200 branches and manages a balance sheet total that now exceeds PLN 2.2 trillion. In the last
                10 years, this value has almost doubled. This means that, despite the increasing regulatory
                burdens, the sector has been growing at an average annual rate of approx. 7%.
            </p>
            <p>
                By the end of June 2020, PLN 1.6 trillion of deposits were placed in banks, of which PLN 877
                billion represented private funds. The value of loans and credits granted to this group of
                customers amounts to approximately PLN 665 billion. The largest part of this value, almost 70%,
                consists of mortgages.
                Despite the large number of entities operating in the sector, the competitive space in the
                innovation area is mainly shaped by the largest players. This is a result of the high concentration
                of financial results in a sector where about 85% of the net profit is generated by the 8 largest
                banks. With their resources and scale of operations, they invest in the continuous development
                of digital channels and seek potential competitive advantages and opportunities to improve
                their customers’ experience.
            </p>
            <p className="opinion-author">
                Author: Łukasz Sieradzan-Sobolewski,
                Strategy Department of PKO Bank Polsk
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