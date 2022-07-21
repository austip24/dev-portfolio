import React, { useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import LinkItem from "./ui/LinkItem";
import MenuLink from "./ui/MenuLink";
import Link from "next/link";
import Github from "./icons/Github";
import { Menu, Transition, Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";

interface NavbarProps {
	path: string;
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
	return (
		<nav className="bg-white shadow-md dark:bg-slate-900 dark:shadow-none w-screen mb-4 flex justify-center">
			<div className="flex justify-between items-center h-12 font-semibold backdrop-blur-sm sticky top-0 w-full max-w-4xl px-4 text-sm">
				<Link href="/">
					<a className="tracking-tighter">Austin Pierson</a>
				</Link>
				<div className="hidden md:flex grow justify-center gap-10 ml-20">
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem href="/about" path={path}>
						About
					</LinkItem>
					<LinkItem
						href="https://github.com/austip24/dev-portfolio"
						path={path}
					>
						<div className="flex gap-1 items-center justify-center">
							<Github />
							Source
						</div>
					</LinkItem>
				</div>
				<div className="flex items-center justify-center gap-4">
					<ThemeToggle />
					<Popover className="md:hidden relative">
						<Popover.Button className="hover:bg-slate-200 hover:dark:bg-slate-800 rounded-lg p-2 border border-slate-500">
							<MenuIcon className="h-4 w-4 fill-current" />
						</Popover.Button>
						<Transition
							as={React.Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-100"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Popover.Panel className="absolute right-0 w-40 mt-2 p-2 flex flex-col gap-1 rounded-lg border bg-slate-50 dark:bg-slate-800 border-slate-500 shadow-lg dark:shadow-slate-800">
								{({ close }) => (
									<>
										<MenuLink
											href="/works"
											className="w-full text-left px-2 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-sky-800 transition-color duration-200"
											onClick={() => close()}
										>
											Works
										</MenuLink>
										<MenuLink
											href="/about"
											className="w-full text-left px-2 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-sky-800 transition-color duration-200"
											onClick={() => close()}
										>
											About
										</MenuLink>
										<MenuLink
											href="https://github.com/austip24/dev-portfolio"
											className="w-full text-left px-2 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-sky-800 transition-color duration-200"
											onClick={() => close()}
										>
											<div className="flex gap-1 items-center">
												<Github />
												Source
											</div>
										</MenuLink>
									</>
								)}
							</Popover.Panel>
						</Transition>
					</Popover>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
