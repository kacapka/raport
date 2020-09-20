import Link from "next/link";
import { useRouter } from "next/router";
import classnames from 'classnames';
import * as Scroll from 'react-scroll';

const Nav = () => {
	const { pathname } = useRouter();

	return (
		<nav className="nav">
			<ul className="nav-list">
				<li className="nav-list__item">
					<Link href="/">
						<a className={classnames({ 'active': pathname === "/" })}>
							Home
						</a>
					</Link>
				</li>
				<li className="nav-list__item menu">
					<a className={classnames({ 'active': pathname === "/summary" })}>
						Report Summary
					</a>
					<ul className="menu-list">
						<li><Link href="/about-poland"><a>About Poland</a></Link></li>
						<li><Link href="/about-poland"><a>The Polish financial sector</a></Link></li>
						<li><Link href="/map-of-polish-fintechs"><a>Map of Polish FinTechs</a></Link></li>
						<li><Link href="/regulatory-and-supervisory-authorities"><a>Regulatory and supervisory authorities</a></Link></li>
						<li><Link href="/financial-institutions-in-poland"><a>Financial institutions in Poland</a></Link></li>
						<li><Link href="/ue-financial-market"><a>Poland as a gateway to the UE financial market</a></Link></li>
						<li><Link href="/accelerators-and-acceleration-programmes"><a>Accelerators and acceleration programmes</a></Link></li>
						<li><Link href="/innovation-hub-programme"><a>Innovation Hub</a></Link></li>
					</ul>
				</li>
				<li className="nav-list__item">
					<Link href="/partners">
						<a>
							Partners
						</a>
					</Link>
				</li>
				{
					pathname === "/" && (
						<li className="nav-list__item">
							<Scroll.Link className="elo" to="home_contact" spy={true} smooth={true} offset={50} duration={1000}>
								Contact
							</Scroll.Link>
						</li>
					)
				}
				<li className="nav-list__item">
					<a href="https://fintech-in-poland.s3.eu-central-1.amazonaws.com/how-to-fintech-in-poland.pdf" download target="_blank">
						Get the report
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
