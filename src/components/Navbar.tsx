import React from "react";
import ThemeToggle from "./ui/ThemeToggle";
import LinkItem from "./ui/LinkItem";
import Link from "next/link";


interface NavbarProps {
	path: string;
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
	return (
		<nav className="flex justify-between items-center h-12 mb-4 font-semibold backdrop-blur-sm sticky top-0">
			<Link href="/">
				Home
			</Link>
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
