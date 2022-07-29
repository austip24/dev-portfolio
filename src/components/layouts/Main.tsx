import { Router } from "next/router";
import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AnimatePresence, motion } from "framer-motion";

interface MainProps {
	children: React.ReactNode;
	router: Router;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
	return (
		<main className="relative min-h-screen bg-no-repeat bg-cover bg-center bg-main-light text-slate-900 dark:bg-main-dark dark:text-slate-50 flex items-center flex-col transition-colors duration-200">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <meta name="description" content="Austin's homepage" />
				<meta name="author" content="Austin Pierson" />
				<meta name="og:site_name" content="Austin Pierson" />
				<meta name="og:title" content="Austin Pierson" />
				<meta name="og:type" content="website" />
				<title>Austin Pierson - Homepage</title> */}
			</Head>

			<Navbar path={router.asPath} />
			<motion.div
				className="w-full max-w-4xl mx-4 dark:text-slate-200"
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
						initial={{ y: 15, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 15, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</motion.div>
			<Footer />
		</main>
	);
};

export default Main;
