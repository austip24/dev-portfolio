import React, { forwardRef } from "react";
import Link from "next/link";

interface LinkItemProps {
	href: string;
	path?: string;
	children: React.ReactNode;
}

const LinkItem = forwardRef<HTMLAnchorElement, LinkItemProps>((props, ref) => {
	const { href, path, children, ...rest } = props;
	const active = path?.startsWith(href);

	return (
		<Link href={href}>
			<a
				ref={ref}
				className={`${
					active &&
					"bg-sky-600 text-slate-100 hover:bg-sky-700 dark:bg-sky-800 dark:text-slate-50 dark:hover:bg-sky-900"
				} rounded group relative px-2 py-1 transition-color duration-200`}
				{...rest}
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
});

LinkItem.displayName = "LinkItem";

export default LinkItem;
