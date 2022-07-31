import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Main";
import { ThemeProvider } from "next-themes";

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<Layout router={router}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
