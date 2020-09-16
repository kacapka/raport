
import Title from '../shared/Title';

import icon1 from '../../static/img/reports_icon_1.png';
import icon2 from '../../static/img/reports_icon_2.png';
import icon3 from '../../static/img/reports_icon_3.png';
import icon4 from '../../static/img/reports_icon_4.png';
import icon5 from '../../static/img/reports_icon_5.png';
import icon6 from '../../static/img/reports_icon_6.png';
import icon7 from '../../static/img/reports_icon_7.png';
import icon8 from '../../static/img/reports_icon_8.png';
import Link from "next/link";

const Reports = () => {
    return (
        <section className="reports">
            <div className="container reports-container">
                <Title color="green">REPORT SUMMARY</Title>
                <div className="reports-list">
                    <Link href="/about-poland">
                        <div className="reports-list__item">
                            <img src={icon1} alt="aboit poland" />
                            <p>
                                About <br />
                                Poland
                            </p>
                        </div>
                    </Link>
                    <div className="reports-list__item">
                        <img src={icon2} alt="financial sector" />
                        <p>
                            The Polish <br />
                            financial sector
                        </p>
                    </div>
                    <div className="reports-list__item">
                        <img src={icon3} alt="Polish FinTechs" />
                        <p>
                            Map of <br />
                            Polish FinTechs
                        </p>
                    </div>
                    <Link href="/regulatory-and-supervisory-authorities">
                        <div className="reports-list__item">
                            <img src={icon4} alt="authorities" />
                            <p>
                                Regulatory <br />
                                and supervisory <br />
                                authorities
                            </p>
                        </div>
                    </Link>
                    <Link href="/financial-institutions-in-poland">
                        <div className="reports-list__item">
                            <img src={icon5} alt="institutions" />
                            <p>
                                Financial  <br />
                                institutions <br />
                                in Poland
                            </p>
                        </div>
                    </Link>
                    <Link href="/ue-financial-market">
                        <div className="reports-list__item">
                            <img src={icon6} alt="UE financial market" />
                            <p>
                                Poland as a gateway <br />
                                to the UE financial <br />
                                market
                            </p>
                        </div>
                    </Link>
                    <Link href='/accelerators-and-acceleration-programmes'>
                        <div className="reports-list__item">
                            <img src={icon7} alt="Accelerators" />
                            <p>
                                Accelerators  <br />
                                and acceleration< br />
                                programmes
                            </p>
                        </div>
                    </Link>
                    <Link href="/innovation-hub-programmme">
                        <div className="reports-list__item">
                            <img src={icon8} alt="Innovation" />
                            <p>
                                Innovation <br />
                                Hub
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="reports-banner">
                <a href="https://fintech-in-poland.s3.eu-central-1.amazonaws.com/how-to-fintech-in-poland.pdf" download target="_blank">
                    <Title color="white">Get the entire report</Title>
                </a>
            </div>
        </section >
    );
};

export default Reports;