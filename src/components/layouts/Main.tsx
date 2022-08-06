import { Router } from "next/router";
import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AnimatePresence, motion } from "framer-motion";
import PageContent from "./PageContent";

interface MainProps {
	children: React.ReactNode;
	router: Router;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
	return (
		<main className="relative min-h-screen bg-no-repeat bg-cover bg-center bg-main-light text-slate-900 dark:bg-main-dark dark:text-slate-50 flex items-center flex-col">
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

			<PageContent router={router}>{children}</PageContent>

			<Footer />
		</main>
	);
};

export default Main;
