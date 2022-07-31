import React, { forwardRef } from "react";
import Link from "next/link";

interface MenuLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MenuLink = forwardRef<HTMLButtonElement, MenuLinkProps>((props, ref) => {
	const { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<button ref={ref} {...rest}>
				{children}
			</button>
		</Link>
	);
});

MenuLink.displayName = "MenuLink";

export default MenuLink;
