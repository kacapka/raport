import { Fragment } from 'react';
import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';
import classnames from 'classnames';

import masterLogo from '../../static/img/partners_logo_4.jpg';
import icon1 from '../../static/img/master_icon_1.png';
import icon2 from '../../static/img/master_icon_2.png';
import icon3 from '../../static/img/master_icon_3.png';
import icon4 from '../../static/img/master_icon_4.png';

import twitterIcon from '../../static/img/twitter_icon.png';
import linkedIcon from '../../static/img/linked_icon.png';

const Content = () => {
    return (
        <Fragment>
            <p className="master-text with-margin">
                Using secure data and networks, partnerships and passion, our innovations and solutions help individuals, financial institutions, governments and businesses realize their greatest potential. With connections across more than 210 countries and territories, we are building a sustainable world that unlocks priceless possibilities for all.
            </p>
            <p className="master-text with-margin">
                Working with Mastercard provides a layer of trust for Fintechs. We give start-ups and emerging brands support and assistance for every stage of their growth and transformation, from market entry to global expansion. In addition to technology, we believe that fostering a culture of innovation is critical to success. So, we hire talented people with curious minds and big ideas,
                and then help them cultivate innovation. We are also committed to working with developers
                and entrepreneurs, enabling advances in the payments ecosystem of the future.
        </p>
            <h2>
                Access to tools that will step up Fintechs’ game
        </h2>
            <p className="master-text with-margin">
                At Mastercard, we understand that due to diversified Fintechs’ needs and areas of activity, one form of cooperation might be insufficient. This is why we take a comprehensive approach.
                We support young tech companies at every stage of their development, sharing our experience and technology, co-financing selected projects and helping Fintechs establish cooperation with trusted external partners. Within the Mastercard Accelerate platform, Fintechs can find the most suitable form of support tailored to their specific needs.
        </p>
            <p className="master-text with-margin">
                By leveraging our global payment processing network, we help Fintechs scale their business.
                This, next to the attractiveness of their offering, is a key factor of their international success.
        </p>
            <p className="master-text with-margin">
                As part of the Accelerate platform we offer our support in the following forms:
        </p>
            <div className="master-item">
                <div className="master-item__icon">
                    <img src={icon1} className="icon1" />
                </div>
                <p className="master-text">
                    <span className="master-text--bold">Start Path </span>
                    – a global startup program providing co-financing and expert support. 1.5k startups apply to it annually. So far, they have managed to obtain over $1.5 billion in funding.This, next to the attractiveness of their offering, is a key factor of their international success.
            </p>
            </div>
            <div className="master-item">
                <div className="master-item__icon">
                    <img src={icon2} className="icon2" />
                </div>
                <p className="master-text">
                    <span className="master-text--bold">Fintech Express </span>
                    – provides a customized set of rules, relevant resources and services designed around Fintechs’ unique needs to grow at speed and expand internationally.
            </p>
            </div>
            <div className="master-item">
                <div className="master-item__icon">
                    <img src={icon3} className="icon3" />
                </div>
                <p className="master-text">
                    <span className="master-text--bold">Engage </span>
                    – enables card issuers, retailers and IoT manufacturers to reach over 150 trusted technology partners. Such cooperation significantly accelerates the development of a given product or service. Companies that outsource technology
                    are four times more likely to hit the market than those which use only in-house technology.
            </p>
            </div>
            <div className="master-item">
                <div className="master-item__icon">
                    <img src={icon4} className="icon4" />
                </div>
                <p className="master-text">
                    <span className="master-text--bold">Developers </span>
                    – access to financial and payment API protocols. Currently, Mastercard offers 60 such APIs, including chatbot API and blockchain API. Using these platforms helps Fintechs enrich their services with payment innovations.
            </p>
            </div>
            <p className="master-text">
                This way we help Fintechs unlock their potential, develop their solutions and thus shape
                the future of retail and finance with us.
            </p>
            <div className="master-social">
                <div className="master-social__icons">
                    <a href="https://twitter.com/MasterCardPL" target="_blank">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/mastercard/" target="_blank">
                        <img src={linkedIcon} alt="linkedin" />
                    </a>
                </div>
                <div className="master-social__links">
                    <a href="https://mastercardcontentexchange.com/" target="_blank">
                        www.mastercardcontentexchange.com
                    </a>
                    <a href="https://newsroom.mastercard.com/eu/pl/" target="_blank">
                        www.newsroom.mastercard.com/eu/pl
                    </a>
                </div>
            </div>
        </Fragment>
    )
};

const Master = () => {
    const { isTablet } = useMedia();

    return (
        <div className="container--small master">
            <img src={masterLogo} className="master-logo" alt="MasterCard" />
            <p className={classnames({ "master-text with-margin": !isTablet })}>
                Mastercard is a technology company in the global payments industry. Our mission is to connect and power an inclusive, digital economy that benefits everyone, everywhere by making transactions safe, simple, smart and accessible.
            </p>
            {isTablet ? <CollapseContent><Content /></CollapseContent> : <Content />}
        </div>
    );
};

export default Master;