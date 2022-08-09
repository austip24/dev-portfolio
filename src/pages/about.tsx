import React from "react";
import type { NextPage } from "next";
import Section from "../components/layouts/Section";
import Book from "../components/icons/Book";

const About: NextPage = () => {
	return (
		<div className="divide-y-2 divide-sky-500 dark:divide-sky-400">
			<Section>
				<h1 className="text-xl font-extrabold tracking-wider">
					A bit about me...
				</h1>
				<div className="flex">
					<p className="font-semibold tracking-tighter md:tracking-normal max-w-lg">
						I am a full-stack web developer based in Arizona. I have a passion
						for building web applications that are user-friendly, performant,
						and accessible. Some of my hobbies include playing the guitar,
						reading fiction, and listening to music.
					</p>
					<div>
						<Book className='w-44'/>
					</div>
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
