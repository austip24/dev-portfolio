import React from "react";

export type SVGIconProps = React.SVGAttributes<SVGSVGElement>;

export interface Work {
	title: string;
	description: string;
	thumbnailImage: string;
	thumbnailDescription: string;
	images: string[];
	link: string;
	stack: string[];
}
