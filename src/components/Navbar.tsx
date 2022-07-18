import React from "react";
import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

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
		<nav className="flex justify-between items-center h-10 border-b border-sky-800">
			<LinkItem href="/" path={path}>
				Home
			</LinkItem>
			<div className="grow flex justify-end gap-10 mr-10">
				<LinkItem href="/works" path={path}>
					Works
				</LinkItem>
				<LinkItem href="/about" path={path}>
					About
				</LinkItem>
			</div>
			<div>
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
