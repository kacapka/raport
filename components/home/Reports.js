
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
import useMedia from '../hooks/useMedia';

const Reports = () => {
    const { isMobile } = useMedia();
    return (
        <section className="reports">
            <div className="container reports-container">
                <Title color="green">REPORT SUMMARY</Title>
                <div className="reports-list">
                    <Link href="/about-poland">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon1} alt="aboit poland" />
                            </div>
                            <p>
                                About <br />
                                Poland
                            </p>
                        </div>
                    </Link>
                    <Link href="/the-polish-financial-sector">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">
                                <img src={icon2} alt="financial sector" />
                            </div>
                            <p>
                                The Polish <br />
                                financial sector
                            </p>
                        </div>
                    </Link>
                    <Link href="/map-of-polish-fintechs">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon3} alt="Polish FinTechs" />
                            </div>
                            <p>
                                Map of <br />
                                Polish FinTechs
                            </p>
                        </div>
                    </Link>
                    <Link href="/regulatory-and-supervisory-authorities">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon4} alt="authorities" />
                            </div>
                            <p>
                                Regulatory <br />
                                and supervisory <br />
                                authorities
                            </p>
                        </div>
                    </Link>
                    <Link href="/financial-institutions-in-poland">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon5} alt="institutions" />
                            </div>
                            <p>
                                Financial  <br />
                                institutions <br />
                                in Poland
                            </p>
                        </div>
                    </Link>
                    <Link href="/ue-financial-market">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon6} alt="UE financial market" />
                            </div>
                            <p>
                                Poland as a gateway <br />
                                to the UE financial <br />
                                market
                            </p>
                        </div>
                    </Link>
                    <Link href='/accelerators-and-acceleration-programmes'>
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon7} alt="Accelerators" />
                            </div>
                            <p>
                                Accelerators  <br />
                                and acceleration < br />
                                programmes
                            </p>
                        </div>
                    </Link>
                    <Link href="/innovation-hub-programme">
                        <div className="reports-list__item">
                            <div className="reports-list__item__icon">

                                <img src={icon8} alt="Innovation" />
                            </div>
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