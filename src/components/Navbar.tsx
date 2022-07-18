import React from "react";
import Link from "next/link";

interface LinkItemProps {
	href: string;
	path: string;
	children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
};

interface NavbarProps {
	path: string;
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
	return (
		<nav>
			<LinkItem href="/works" path={path}>
				Works
			</LinkItem>
		</nav>
	);
};

export default Navbar;
