import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Main";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<ThemeProvider attribute='class'>
			<Layout router={router}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
