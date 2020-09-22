import chart1 from '../../static/img/chart1.png';
import chart2 from '../../static/img/chart2.png';
import chart3 from '../../static/img/chart3.png';

const Content = () => {
    return (
        <div className="container--small content">
            <div className="content-row content-row--top">
                <div className="content-row__left">
                    <img src={chart1} className="content-chart1" />
                </div>
                <div className="content-row__right">
                    <p className="content-text">
                        The Polish banking sector is an open system. Two of the 10 largest banks – namely: mBank SA and Alior Bank SA – entered the market fairly recently (2000 and 2008, respectively) without a legacy IT architecture dated tens of years back and instead with bunch of fresh ideas to conquer the market with. Currently the system consists of 30 commercial banks, 536 local cooperative banks (most of which are
                        a part of two large associations: BPS and SGB) and 25 cooperative savings and credit unions (SKOK).
                    </p>
                </div>
            </div>
            <div className="content-row content-row--bottom">
                <div className="content-row__left">
                    <p className="content-text with-margin">
                        <span>The TOP 5 banks</span> by assets and number of clients, excluding unions and associations, are:
                    </p>
                    <p className="content-text with-margin">
                        Two domestic institutions with state capital: <br />
                        • PKO Bank Polski SA <br />
                        • Bank Polska Kasa Opieki SA
                    </p>
                    <p className="content-text">
                        Banks owned by large international groups: <br />
                        • Santander Bank Polska SA <br />
                        • ING Bank Śląski SA <br />
                        • mBank SA
                    </p>
                </div>
                <div className="content-row__right">
                    <img src={chart2} className="content-chart2" />
                </div>
            </div>
            <div className="content-bottom">
                <h3>The market has seen strong push for consolidation for the past several years, resulting with 13 mergers during last 20 years. </h3>
                <img src={chart3} className="content-chart3" />
            </div>
        </div>
    );
};

export default Content;