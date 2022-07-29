import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="p-8 gap-6 md:gap-10 flex flex-col-reverse items-center justify-center md:flex-row">
			<motion.div
				className="tracking-tight md:flex md:flex-col md:gap-1 text-2xl sm:text-4xl md:text-5xl font-bold"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<h1 className="inline md:block">Hi, </h1>
				<h1 className="inline md:block">
					I&apos;m{" "}
					<span className="text-sky-600 dark:text-sky-400 underline underline-offset-4">
						Austin
					</span>
					,{" "}
				</h1>
				<h1 className="inline md:block">a web developer</h1>
			</motion.div>
			<motion.div className="relative w-52 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden outline outline-offset-4 outline-slate-900 dark:outline-current pointer-events-none">
				<Image
					src="/imgs/profile_pic.png"
					alt="Profile Pic"
					layout="fill"
					objectFit="cover"
				/>
			</motion.div>
		</div>
	);
};

export default Home;
