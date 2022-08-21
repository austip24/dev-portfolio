import React from "react";
import type { NextPage } from "next";
import Section from "../components/layouts/Section";
import Github from "../components/icons/Github";
import LinkedIn from "../components/icons/LinkedIn";
import Link from "next/link";

const About: NextPage = () => {
	return (
		<div className="divide-y-2 divide-sky-500 dark:divide-sky-400">
			<Section>
				<h1 className="dark:text-sky-400 text-2xl md:text-3xl font-extrabold tracking-wider">
					A bit about me...
				</h1>
				<div className="">
					<p className="indent-8 text-xl font-semibold tracking-tighter md:tracking-normal">
						I am a full-stack web developer based in Arizona. I have a passion
						for building web applications that are user-friendly, performant,
						and accessible. Some of my hobbies include playing the guitar,
						reading fiction, and listening to music.
					</p>
					<p className="indent-8 text-xl font-semibold tracking-tighter md:tracking-normal">
						I am currently looking for a job as a web developer! If you would
						like to get in touch, please send me an email at{" "}
						<span className="text-sky-700 dark:text-sky-500 underline select-all cursor-pointer">
							austinpier24@gmail.com
						</span>
						.
					</p>
					{/* <div className="grow">
						<Book className="fill-slate-50/80 stroke-sky-900 stroke-2 -rotate-[10deg]" />
					</div> */}
				</div>
			</Section>
			<Section>
				<h1 className="dark:text-sky-400 text-2xl md:text-3xl font-extrabold tracking-wider">
					On the web...
				</h1>
				<div className="flex flex-col items-start gap-1">
					<Link href="https://github.com/austip24">
						<button className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold hover:bg-sky-500/30 transition duration-150">
							<Github />
							<span className="group-hover:underline underline-offset-4">
								@austip24
							</span>
						</button>
					</Link>
					<Link href="https://www.linkedin.com/in/austin-pierson-219621249/">
						<button className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold hover:bg-sky-500/30 transition duration-150">
							<LinkedIn />
							<span className="group-hover:underline underline-offset-4">
								Linked In
							</span>
						</button>
					</Link>
				</div>
			</Section>
		</div>
	);
};

export default About;
