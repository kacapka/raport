import { Fragment } from 'react';

import pko from '../../static/img/pko_fintech_logo.png';
import bnp from '../../static/img/bnp_logo.png';
import rbl from '../../static/img/rbl_logo.png';
import mbank from '../../static/img/mbank_accelerator_logo.png';
import poladnPrize from '../../static/img/poland_prize_logo.png';

import LisItem from '../authorities/ListItem';

const PkoContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                Let’s FinTech with PKO Bank Polski is a programme facilitating partnerships with start-ups intended to search for innovative solutions, ready-for-use internal and production pilot projects and scaling up their business in partnership with the largest financial institution in Central and Eastern Europe. The selection of start-ups is conducted on a continuous basis, with an individual approach to each cooperation.
            </p>
            <p className="bold">
                Contact: through the website <a href="https://fintech.pkobp.pl/" target="_blank">www.fintech.pkobp.pl</a> or by e-mail: <a href="mailto:fintech@pkobp.pl">fintech@pkobp.pl</a>
            </p>
        </Fragment>
    );
};

const BnpContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                One feature of the programme is the BNP Paribas Sandbox – a solution enabling a reality check of an idea by facing it with real-life problems. FinTechs can count on help in compliance with the current regulations, implementation of the necessary safety requirements and development of an architecture enabling implementation into the Bank’s systems. The Bank also established its own R&D centre (Innovation Lab) which cooperates with the programme participants by offering a supervisor dedicated to each FinTech.Innovation Lab encourages cooperation with both companies from the banking and non-financial sector.
            </p>
        </Fragment>
    );
};

const RblContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                In 2018, Alior Bank created RBL_Innovation, which was recognised by Global Finance magazine as one of the best and most modern innovation laboratories in the world. RBL_ has 6 teams working on a daily basis, they are responsible, among others, for the introduction of the first permanent medium that uses public blockchain in Poland, the implementation of open banking using the possibilities of the PSD2 directive, the development of cooperation with start-ups from all over the world, as well as for the design of concepts of new solutions for UX and their user testing.
            </p>
            <p className="with-margin">
                One of the key initiatives is the RBL_START accelerator – a programme designed especially for FinTechs, enabling them to enter into cooperation with Alior Bank on the project path. The main value of the accelerator lies in the close cooperation of the participants with the bank’s business units during various stages of the implementation project, including: the design of the UX path, testing with clients, preparation of a business plan or an analysis in terms of security and regulatory compliance. The programme has been prepared in order to not only support start-ups at early stages of development, but also to develop new ideas of already existing companies and establish cooperation with foreign entities which are only just starting their business activities on the Polish market.
            </p>
            <p className="with-margin">
                Furthermore, the RBL_VC fund was established to cooperate with start-ups, which examines the investment potential of FinTech companies cooperating with Alior Bank and invests in the most promising solutions.
            </p>
            <p className="bold">
                Additional information about it can be found at <a href="https://rbl.vc/" target="_blank">www.rbl.vc</a>.
            </p>
            <p className="bold">
                Contact: <a href="https://www.accelerator.aliorbank.pl/" target="_blank">www.accelerator.aliorbank.pl</a>.
            </p>
        </Fragment>
    );
};

const MbankContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                mAccelerator is a venture capital fund established in 2017 by mBank, which focuses mainly on Late Seed and Series A (Early Development Phase) investments.
            </p>
            <p>
                One of the benefits for start-ups cooperating with mAccelerator is the opportunity to test their solution and establish partnerships in Poland, the Czech Republic and Slovakia. The acceleration programme is addressed mainly to entities with a financial model based on SaaS or Marketplace.
            </p>
        </Fragment>
    );
};

const PolandPrizeContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                Poland Prize is an acceleration programme financed by the Polish Agency for Enterprise Development. The partners of the programme include, among others: Santander Bank Polska, Procter & Gamble and SpeedUp Venture Group.
            </p>
            <p className="with-margin">
                Poland Prize by Huge Thing is addressed to startups from outside Poland that deal with finance, marketing, HR, and others depending on the partner’s interests. The acceleration program is dedicated to mature startups with a developed product that is ready to enter the market.
                The recruitment process includes 3 stages: collecting applications followed by conducting interviews verification and pre-acceleration. The Program lasts for 16 weeks, as part of the Program, startups take part in:
            </p>
            <ul className="with-margin">
                <li>• workshops,</li>
                <li>• mentoring sessions,</li>
                <li>• polish lessons,</li>
                <li>• individual work on startups projects,</li>
                <li>• trips to Poland’s biggest business hubs.</li>
            </ul>
            <p>
                Accelerator is at Campus Warsaw. Participation in the Program is free.
            </p>
        </Fragment>
    );
};

const data = [
    {
        className: '6',
        logo: pko,
        name: null,
        company: 'Let’s FinTech',
        content: <PkoContent />
    },
    {
        className: '7',
        logo: bnp,
        name: null,
        company: 'Innovation Lab',
        content: <BnpContent />
    },
    {
        className: '8',
        logo: rbl,
        name: null,
        company: 'RBL_Innovation by Alior Bank',
        content: <RblContent />
    },
    {
        className: '9',
        logo: mbank,
        name: null,
        company: 'mAccelerator',
        content: <MbankContent />
    },
    {
        className: '20',
        logo: poladnPrize,
        name: null,
        company: 'Poland Prize',
        content: <PolandPrizeContent />
    }
];

const List = () => {
    return (
        <div className="authorities-list container--small">
            {data.map(el => {
                return (
                    <LisItem
                        key={el.className}
                        data={el}
                    >
                        {el.content}
                    </LisItem>
                );
            })}
        </div>
    );
};

export default List;
