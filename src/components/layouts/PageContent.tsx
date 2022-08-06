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
			className="w-full max-w-5xl mx-4 dark:text-slate-200"
			initial={{ y: 30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<AnimatePresence
				initial={false}
				exitBeforeEnter
				onExitComplete={() => {
					if (typeof window !== "undefined") {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<motion.div
					key={router.route}
					className="p-4"
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
