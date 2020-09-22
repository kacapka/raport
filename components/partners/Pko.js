import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';

import pkoLogo from '../../static/img/pko_logo.jpg';

const Content = () => (
    <p className="bird-text margin-top">
        PKO Bank Polski is the undisputed leader of the Polish banking sector. The bank is the primary provider of financial services for all customer segments, achieving the highest shares in the savings and loans market, leasing market, and private equity funds. With over 9.4 million payment cards, the bank is the largest issuer of debit and credit cards in Poland. Thanks to the development of digital tools, including the IKO application, which at the end of the first quarter of 2020 had 4.5 million active applications, PKO Bank Polski is the most mobile bank in Poland. The companies of the PKO Bank Polski Group strengthen the Bank's strong position. The Brokerage House of PKO Banku Polskiego is a leader in terms of the number and value of IPO and SPO transactions on the capital market.
    </p>
);

const Pko = () => {
    const { isMobile } = useMedia();

    return (
        <div className="container--small pko">
            <img src={pkoLogo} className="pko-logo" alt="PKO Bank Polski" />
            {isMobile ? <CollapseContent><Content /></CollapseContent> : <Content />}
        </div>
    );
};

export default Pko;