import { motion } from "framer-motion";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="p-8">
			<motion.div
				className="tracking-tight flex flex-col gap-1 text-3xl sm:text-4xl md:text-5xl font-bold"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<h1>Hi,</h1>
				<h1>
					I&apos;m{" "}
					<span className="text-sky-600 dark:text-sky-400 underline underline-offset-4">
						Austin
					</span>
					,
				</h1>
				<h1>a web developer</h1>
			</motion.div>
		</div>
	);
};

export default Home;
