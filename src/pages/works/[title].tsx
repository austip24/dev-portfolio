import React, { useEffect, useState } from "react";
import works from "../../data/works";
import type { NextPage } from "next";
import type { Work } from "../../types";

import { useRouter } from "next/router";

const WorkPage: NextPage = () => {
	const router = useRouter();
	const { title } = router.query;
	const [work, setWork] = useState<Work | null>(null);

	useEffect(() => {
		const foundWork = works.find((work) => work.title === title);
		if (foundWork) {
			setWork(foundWork);
		}
	}, [title]);

	return (
		<div>
			<div>{work?.title}</div>
			<div>{work?.description}</div>
		</div>
	);
};

export default WorkPage;
