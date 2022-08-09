import React from "react";

interface SectionProps {
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
	return <section className="flex flex-col gap-4 py-4">{children}</section>;
};

export default Section;
