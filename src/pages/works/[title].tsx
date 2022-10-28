import React, { useEffect, useState } from "react";
import works from "../../data/works";
import type { NextPage } from "next";
import type { Work } from "../../types";

import { useRouter } from "next/router";

const WorkPage: NextPage = () => {
	const router = useRouter();
	const { title } = router.query;
	const work = works.find((work) => work.title === title);

	return (
		<div>
			<div>{work?.title}</div>
			<div>{work?.description}</div>
		</div>
	);
};

export default WorkPage;
