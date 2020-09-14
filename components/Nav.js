import Link from "next/link";
import { useRouter } from "next/router";
import classnames from 'classnames';

const Nav = () => {
	const { pathname } = useRouter();

	return (
		<nav className="nav">
			<ul>
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
				<li>
					<Link href="/team">
						<a>
							Contact
						</a>
					</Link>
				</li>
				<li>
					<Link href="/team">
						<a>
							Get the raport
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
