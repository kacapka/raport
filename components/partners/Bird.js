import { Fragment } from 'react';
import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';

import birdLogo from '../../static/img/bird_logo.png';
import birdText from '../../static/img/bird_text.png';

const Content = () => (
    <Fragment>
        <div className="bird-wrapper">
            <img src={birdText} className="bird-wrapper__image" alt="Bird&Bird" />
            <p className="bird-text bird-wrapper__text">
                The Warsaw Bird & Bird team consists of over 70 lawyers specialising in over 20 areas of law. Key industry rankings, such as Chambers Europe/Global, Legal 500 and IFLR 1000, recognise the Bird & Bird team in many areas every year. Bird & Bird advises clients from various industries and sectors of the economy, including financial, telecommunications, IT, internet, energy, aviation, automotive, sports, postal, biotechnology, pharmaceutical, e-commerce and State-owned companies.
            </p>
        </div>
        <p className="bird-text">
            In 2020, Bird & Bird was recognized as the best FinTech advisory firm in Poland by the prestigious international Chambers FinTech Legal ranking, and according to Legal 500 EMEA, it is the best law firm in the field of TMT. Additionally, the Warsaw Finance and Financial Regulation team has been repeatedly distinguished in many other international rankings.
        </p>
    </Fragment>
);

const Bird = () => {
    const { isTablet } = useMedia();

    return (
        <div className="container--small bird">
            <img src={birdLogo} className="bird-logo" alt="Bird&Bird" />
            <p className="bird-text">
                Bird & Bird is an international law firm and a world leader in advising on innovative projects in the area of finance, IT and new technologies, as well as in intellectual property protection. Currently, over 1,350 Bird & Bird lawyers provide services to clients in 29 offices in 20 countries in Europe, Asia, the Middle East, the United States and Australia, and coordinate advisory services in over 180 countries around the world. The Warsaw Bird & Bird team consists of over 70 lawyers specialising in over 20 areas of law. Key industry rankings, such as Chambers Europe/Global, Legal 500 and IFLR 1000, recognise the Bird & Bird team in many areas every year. Bird & Bird advises clients from various industries and sectors of the economy, including financial, telecommunications, IT, internet, energy, aviation, automotive, sports, postal, biotechnology, pharmaceutical, e-commerce and State-owned companies.
            </p>
            {isTablet ? <CollapseContent><Content /></CollapseContent> : <Content />}
        </div>
    );
};

export default Bird;