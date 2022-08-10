import React from "react";
import type { NextPage } from "next";
import Section from "../components/layouts/Section";

const About: NextPage = () => {
	return (
		<div className="divide-y-2 divide-sky-500 dark:divide-sky-400">
			<Section>
				<h1 className="dark:text-sky-400 text-2xl md:text-3xl font-extrabold tracking-wider">
					A bit about me...
				</h1>
				<div className="flex flex-col gap-2 items-center">
					<p className="indent-8 text-xl font-semibold tracking-tighter md:tracking-normal">
						I am a full-stack web developer based in Arizona. I have a passion
						for building web applications that are user-friendly, performant,
						and accessible. Some of my hobbies include playing the guitar,
						reading fiction, and listening to music.
					</p>
					<p className="indent-8 text-xl font-semibold tracking-tighter md:tracking-normal">
						I am a full-stack web developer based in Arizona. I have a passion
						for building web applications that are user-friendly, performant,
						and accessible. Some of my hobbies include playing the guitar,
						reading fiction, and listening to music.
					</p>
					{/* <div className="grow">
						<Book className="fill-slate-50/80 stroke-sky-900 stroke-2 -rotate-[10deg]" />
					</div> */}
				</div>
			</Section>
			<Section>
				<h1 className="text-xl font-extrabold tracking-wider">Education</h1>
				<div>hello</div>
				<div>hello</div>
			</Section>
		</div>
	);
};

export default About;
