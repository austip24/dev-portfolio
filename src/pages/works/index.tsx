import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import works from "../../data/works";
import { Work } from "../../types";
import Image from "next/image";
import Section from "../../components/layouts/Section";

const WorkCard: React.FC<Work> = (props) => {
	return (
		<div className="group relative cursor-pointer border-2 border-slate-500 rounded-lg">
			<Link href={`/works/${props.title}`}>
				<div className="flex flex-col">
					<div className="relative w-full aspect-video">
						<div className="absolute inset-0 group-hover:bg-black/5 dark:group-hover:bg-white/5 z-10"></div>
						<Image
							src="/imgs/profile.png"
							layout="fill"
							objectFit="cover"
							alt={`Thumbnail for ${props.title}`}
						/>
					</div>
					<div className="group-hover:bg-black/5 dark:group-hover:bg-white/5 group-hover:text-black dark:group-hover:text-white">
						<div className="p-4 flex flex-col gap-1 md:gap-4 group-hover:-translate-y-1 transition-transform duration-150">
							<h2 className="font-extrabold">{props.title}</h2>
							<p>{props.description}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const Works: NextPage = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 py-4">
			{works.map((work, i) => (
				<>
					<WorkCard key={i} {...work} />
				</>
			))}
		</div>
	);
};

export default Works;
