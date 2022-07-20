import React from "react";
import Link from "next/link";

interface LinkItemProps {
	href: string;
	path: string;
	children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, path, children }) => {
	const active = path.startsWith(href);

	return (
		<Link href={href}>
			<a
				className={`${
					active &&
					"bg-sky-600 text-slate-100 hover:bg-sky-700 dark:bg-sky-800 dark:text-slate-50 dark:hover:bg-sky-900"
				} rounded group relative px-2 py-1 transition-color duration-300`}
			>
				{children}
				<span
					className={`${
						!active && "group-hover:w-1/2"
					} absolute bottom-0 left-1/2 h-[2px] w-0 bg-sky-500 transition-all duration-300`}
				></span>
				<span
					className={`${
						!active && "group-hover:w-1/2"
					} absolute bottom-0 right-1/2 h-[2px] w-0 bg-sky-500  transition-all duration-300`}
				></span>
			</a>
		</Link>
	);
};

export default LinkItem;
