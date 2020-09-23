import useMedia from '../hooks/useMedia';
import CollapseContent from '../shared/CollapseContent';

import pkoLogo from '../../static/img/pko_logo.jpg';

const Content = () => (
    <p className="bird-text margin-top">
        Having over 9.46 million pay cards, the Bank is the largest issuer of debit and credit cards in Poland. Thanks to the development of digital tools, including IKO, which was activated almost 4.7 million times by the end of the first half of 2020, PKO Bank Polski has become the most mobile bank in Poland. The Capital Group companies reinforce the Bank’s strong position. PKO Bank Polski Brokerage House is the leader with respect to the number and the value of IPO and SPO transactions on the capital market.    </p>
);

const Pko = () => {
    const { isTablet } = useMedia();

    return (
        <div className="container--small pko">
            <img src={pkoLogo} className="pko-logo" alt="PKO Bank Polski" />
            <p className="bird-text">
                PKO Bank Polski is the indisputable leader in the Polish banking sector. The Bank is the basic supplier of financial services for all segments of clients, having highest shares in the market of deposits, credit, lease and investment funds for natural persons.
            </p>
            {isTablet ? <CollapseContent><Content /></CollapseContent> : <Content />}
        </div>
    );
};

export default Pko;