import React from "react";
import { Router } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

interface PageContentProps {
	children: React.ReactNode;
	router: Router;
}

const PageContent: React.FC<PageContentProps> = ({ children, router }) => {
	return (
		<motion.div
			className="w-full max-w-5xl dark:text-slate-200 py-4 px-10 lg:px-10 h-full grow"
			initial={{ y: 30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<AnimatePresence
				exitBeforeEnter
				onExitComplete={() => {
					if (typeof window !== "undefined") {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<motion.div
					className="h-full"
					key={router.route}
					initial={{ y: 15, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 15, opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default PageContent;
