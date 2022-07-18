import { Router } from "next/router";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

interface MainProps {
	children: React.ReactNode;
	router: Router;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
	return (
		<main className="min-h-screen dark:bg-slate-900 dark:text-slate-50 bg-slate-50 text-slate-900">
			<Navbar path={router.asPath} />

			<motion.div
				key={router.route}
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{children}
				<Footer />
			</motion.div>
		</main>
	);
};

export default Main;
