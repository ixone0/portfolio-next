import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/pages/favicon.ico" />
                <title>Portfolio</title>
                <meta name="Portfolio Thrinadech" content="Portfolio of Thrinadech Pittirawipas, a first-year Software Engineering student." />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
