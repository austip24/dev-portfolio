import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Main";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<Layout router={router}>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
