import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from "next";
import Button from "../components/ui/Button";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="gap-8 md:flex-row flex flex-col-reverse items-center justify-around mt-12">
			<div className="flex flex-col items-center justify-center gap-8 md:items-start">
				<div className="tracking-tight md:flex md:flex-col md:gap-1 text-2xl md:text-4xl lg:text-5xl font-bold">
					<h1 className="inline md:block">Hi, </h1>
					<h1 className="inline md:block">
						I&apos;m{" "}
						<span className="relative text-sky-500 dark:text-sky-400">
							Austin
							<motion.span
								className="absolute bottom-0 left-0 h-[3px] md:h-1 bg-sky-500 dark:bg-sky-400 rounded"
								initial={{
									width: 0,
								}}
								animate={{ width: "100%" }}
								transition={{ duration: 1.05, delay: 0.55, type: 'spring', bounce: 0.1, damping: 10 }}
							></motion.span>
						</span>
						,{" "}
					</h1>
					<h1 className="inline md:block">a web developer</h1>
				</div>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.5 }}
				>
					<div className="flex gap-4 md:gap-6 lg:gap-8">
						<Button>
							<Link href="/about">
								<span className="flex gap-2 h-full w-full px-4 py-2">
									About{" "}
									<div className="group-hover:translate-x-1 transition duration-150">
										&gt;
									</div>
								</span>
							</Link>
						</Button>
						<Button>
							<Link href="/works">
								<span className="flex gap-2 px-4 py-2">
									Works{" "}
									<div className="group-hover:translate-x-1 transition duration-150">
										&gt;
									</div>
								</span>
							</Link>
						</Button>
					</div>
				</motion.div>
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
