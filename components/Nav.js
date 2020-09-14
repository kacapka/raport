import Link from "next/link";
import { useRouter } from "next/router";
import classnames from 'classnames';
import * as Scroll from 'react-scroll';

const Nav = () => {
	const { pathname } = useRouter();

	return (
		<nav className="nav">
			<ul>
				<li>
					<Link href="/">
						<a className={classnames({ 'active': pathname === "/" })}>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href="/summary">
						<a className={classnames({ 'active': pathname === "/summary" })}>
							Raport Summary
						</a>
					</Link>
				</li>
				<li>
					<Link href="/team">
						<a>
							Partners
						</a>
					</Link>
				</li>
				{
					pathname === "/" && (
						<li>
							<Scroll.Link to="home_contact" spy={true} smooth={true} offset={50} duration={1000}>
								Contact
							</Scroll.Link>
						</li>
					)
				}
				<li>
					<a href="https://fintech-in-poland.s3.eu-central-1.amazonaws.com/how-to-fintech-in-poland.pdf" download target="_blank">
						Get the raport
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
