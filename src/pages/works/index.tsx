import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import works from "../../data/works";

const Works: NextPage = () => {
	return (
		<div className="grid grid-cols-2">
			{works.map((work, i) => (
				<Link href={`/works/${work.title}`} key={i}>
					{work.title}
				</Link>
			))}
		</div>
	);
};

export default Works;
