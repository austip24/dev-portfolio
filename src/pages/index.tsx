import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from "next";
import Button from "../components/ui/Button";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="gap-8 md:flex-row flex flex-col-reverse items-center justify-around mt-12">
			<section className="flex flex-col items-center justify-center gap-8 md:items-start">
				<div className="tracking-tight md:flex md:flex-col md:gap-1 text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-start">
					<h1 className="inline md:block">Hi, </h1>
					<h1 className="inline md:block">
						I&apos;m{" "}
						<span className="relative text-sky-500 dark:text-sky-400">
							Austin
							<span className="absolute bottom-0 w-full left-0 h-[3px] md:h-1 bg-sky-500 dark:bg-sky-400 rounded"></span>
						</span>
						,{" "}
					</h1>
					<h1 className="inline md:block">a web developer</h1>
				</div>
				<div>
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
				</div>
			</section>
			<section className="relative w-52 sm:w-64 md:w-72 aspect-square rounded-full overflow-hidden outline outline-offset-4 outline-current bg-sky-600/40 dark:bg-sky-500/30">
				<Image
					className="select-none"
					src="/imgs/profile.png"
					alt="Profile Pic"
					layout="fill"
					objectFit="cover"
				/>
			</section>
		</div>
	);
};

export default Home;
