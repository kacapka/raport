import { Fragment, useState } from 'react';
import Link from "next/link";
import classnames from 'classnames';
import { Collapse } from 'react-collapse';
import { useRouter } from "next/router";
import * as Scroll from 'react-scroll';

import hamburger from '../../static/img/hamburger.png'
import close from '../../static/img/closee.png';
import MobileLogo from './MobileLogo';

const MobileNav = () => {
    const { pathname } = useRouter();
    const [isNav, setIsNav] = useState(false);
    const [isSubNav, setIsSubNav] = useState(false);

    const toggleNav = () => {
        setIsNav(prev => !prev);
    };

    const toggleSubNav = () => {
        setIsSubNav(prev => !prev);
    };

    const closeNav = () => {
        setIsNav(false);
        setIsSubNav(false);
    }

    return (
        <div className="mobile-nav">
            <img src={isNav ? close : hamburger} className="mobile-nav__trigger" onClick={toggleNav} />
            {isNav && (
                <div className="mobile-nav__bg">
                    <MobileLogo nav />
                    <nav>
                        <ul className="main-menu">
                            <li>
                                <Link href="/">
                                    <a className={classnames({ 'active': pathname === "/" })} onClick={closeNav}>
                                        Home
						            </a>
                                </Link>
                            </li>
                            <li>
                                <a className={classnames({ 'active': pathname === "/summary" })} onClick={toggleSubNav}>
                                    Report Summary ↓
					            </a>
                                <Collapse isOpened={isSubNav}>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-poland"><a onClick={closeNav}>About Poland</a></Link></li>
                                        <li><Link href="/about-poland"><a onClick={closeNav}>The Polish financial sector</a></Link></li>
                                        <li><Link href="/map-of-polish-fintechs"><a onClick={closeNav}>Map of Polish FinTechs</a></Link></li>
                                        <li><Link href="/regulatory-and-supervisory-authorities"><a onClick={closeNav}>Regulatory and supervisory authorities</a></Link></li>
                                        <li><Link href="/financial-institutions-in-poland"><a onClick={closeNav}>Financial institutions in Poland</a></Link></li>
                                        <li><Link href="/ue-financial-market"><a onClick={closeNav}>Poland as a gateway to the UE financial market</a></Link></li>
                                        <li><Link href="/accelerators-and-acceleration-programmes"><a onClick={closeNav}>Accelerators and acceleration programmes</a></Link></li>
                                        <li><Link href="/innovation-hub-programme"><a onClick={closeNav}>Innovation Hub</a></Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li>
                                <Link href="/partners">
                                    <a onClick={closeNav}>
                                        Partners
						            </a>
                                </Link>
                            </li>
                            {
                                pathname === "/" && (
                                    <li>
                                        <Scroll.Link className="elo" to="home_contact" spy={true} smooth={true} offset={50} duration={1000} onClick={closeNav}>
                                            Contact
							            </Scroll.Link>
                                    </li>
                                )
                            }
                            <li>
                                <a href="https://fintech-in-poland.s3.eu-central-1.amazonaws.com/how-to-fintech-in-poland.pdf" download target="_blank" onClick={closeNav}>
                                    Get the report
					            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileNav;