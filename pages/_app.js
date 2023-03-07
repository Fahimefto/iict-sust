import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#a5002f" height={5} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
