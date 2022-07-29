import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="p-8 flex flex-col-reverse items-center md:flex-row">
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
			<motion.div className="relative w-72 md:w-96 aspect-square rounded-full overflow-hidden mix-blend-luminosity">
				<Image src="/imgs/profile_pic.png" alt="Profile Pic" layout="fill" objectFit='cover' />
			</motion.div>
		</div>
	);
};

export default Home;
