import { useEffect, useState } from "react";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/dist/shared/lib/head";
import { ThemeProvider } from "@mui/material";
import theme from "ui/theme/theme";
import Header from "ui/components/surfaces/Header/Header";
import Footer from "ui/components/surfaces/Footer/Footer";
import { AppContainer } from "@styles/pages/_app.styled";
function MyApp({ Component, pageProps }: AppProps) {
	const [myTheme, setMyTheme] = useState(theme);

	useEffect(() => {
		document.querySelector("#jss-server-side")?.remove();
	}, []);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setMyTheme(redTheme);
	// 	}, 2500);
	// }, []);

	return (
		<>
			<Head>
				<title>e-diaristas {pageProps.title && `- ${pageProps.title}`} </title>
			</Head>
			<ThemeProvider theme={myTheme}>
				
				<AppContainer>

					<Header/>
					<Component {...pageProps} />
					<Footer/>

				</AppContainer>
			</ThemeProvider>
		</>
	);
}
export default MyApp;
