import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="gap-4 md:gap-10 md:flex-row flex flex-col-reverse items-center justify-around">
			<div className="tracking-tight md:flex md:flex-col md:gap-1 text-2xl md:text-4xl lg:text-5xl font-bold">
				<h1 className="inline md:block">Hi, </h1>
				<h1 className="inline md:block">
					I&apos;m{" "}
					<span className="text-sky-600 dark:text-sky-400 underline underline-offset-4">
						Austin
					</span>
					,{" "}
				</h1>
				<h1 className="inline md:block">a web developer</h1>
			</div>
			<div className="relative w-52 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden outline outline-offset-4 outline-current bg-sky-600/40 dark:bg-sky-500/30">
				<Image
					className="select-none"
					src="/imgs/profile.png"
					alt="Profile Pic"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
};

export default Home;
