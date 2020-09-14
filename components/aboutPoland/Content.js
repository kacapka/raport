import icon1 from '../../static/img/poland_icon_1.png';
import icon2 from '../../static/img/poland_icon_2.png';
import icon3 from '../../static/img/poland_icon_3.png';
import icon4 from '../../static/img/poland_icon_4.png';

const data = [
    { value: '33rd', label: 'in Ease of Doing Business Ranking (top in CEE)' },
    { value: '24th', label: 'in Annual Global Resilience Index' },
    { value: '41st', label: 'in Transparency Corruption Perception Index (top in CEE)' },
    { value: 'USD 246.6 m', label: 'value of software development market (5.5% annual growth)' },
    { value: 'USD 15.5 bn', label: 'expected sales of IT by 2020' },
    { value: '10% ', label: 'annual increase in the number of software developers in Poland  (2017/2018)' },
    { value: '86', label: 'Fortune 500 companies trusted Poland with their Buissness Centres' },
];

const Content = () => {
    const renderData = () => {
        return data.map(item => {
            return (
                <div key={item.value} className="content-banner__item">
                    <p className="content-banner__value">{item.value}</p>
                    <p className="content-banner__label">{item.label}</p>
                </div>
            );
        });
    };

    return (
        <section className="content">
            <div className="container content-container">
                <div className="content-features">
                    <div className="content-features__item">
                        <p className="content-features__item__title">Currency</p>
                        <p className="content-features__item__desc">
                            Polish Zloty (PLN) <br />
                            1 EUR ~ 4.3 PLN <br />
                            1 USD ~ 3.8 PLN
                        </p>
                    </div>
                    <div className="content-features__item">
                        <p className="content-features__item__title">Tax Rates</p>
                        <p className="content-features__item__desc">
                            CIT: 19% (base rate) <br />
                            VAT: 23% (base rate) <br />
                            PIT: 17%, 32%
                        </p>
                    </div><div className="content-features__item">
                        <p className="content-features__item__title">USD 33,890</p>
                        <p className="content-features__item__desc">
                            GDP per capita  (PPP)
                        </p>
                    </div><div className="content-features__item">
                        <p className="content-features__item__title">USD 526.5 bn</p>
                        <p className="content-features__item__desc">
                            PValue of assets <br />
                            in the banking sector
                        </p>
                    </div>
                </div>
                <h2>High-tech sectors of the Polish economy</h2>
                <div className="content-list">
                    <div className="content-list__item">
                        <div className="content-list__item__icon">
                            <img src={icon1} alt="Business Services Sector" className="icon1" />
                        </div>
                        <div>
                            <p className="content-list__item__title"> Business Services Sector including IT</p>
                            <p className="content-list__item__desc">307,000 employed in SSC+IT</p>
                        </div>
                    </div>
                    <div className="content-list__item">
                        <div className="content-list__item__icon">
                            <img src={icon2} alt="Real Estate" className="icon2" />
                        </div>
                        <div>
                            <p className="content-list__item__title">Real Estate</p>
                            <p className="content-list__item__desc">
                                40.5m2 on property market (office+retail+warehouse) <br />
                                USD 7.7 bn in investments
                            </p>
                        </div>
                    </div>
                    <div className="content-list__item">
                        <div className="content-list__item__icon">
                            <img src={icon3} alt="Research & Development" className="icon3" />
                        </div>
                        <div>
                            <p className="content-list__item__title">Research & Development</p>
                            <p className="content-list__item__desc">
                                170,000 employees <br />
                                over 5,800 registered entities
                            </p>
                        </div>
                    </div>
                    <div className="content-list__item">
                        <div className="content-list__item__icon">
                            <img src={icon4} alt="Gaming Industry" className="icon4" />
                        </div>
                        <div>
                            <p className="content-list__item__title">Gaming Industry</p>
                            <p className="content-list__item__desc">
                                USD 504 m market value <br />
                                400 game developing entities <br />
                                90% of income comes from exports
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-banner">
                <div className="content-banner__wrapper">
                    <h3>QUALITY MATTERS IN POLAND</h3>
                    <div>
                        {renderData()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;