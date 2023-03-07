import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#a5002f"
        height={5}
        transformCSS={(css) => {
          const modifiedCSS = `
            ${css}
            #nprogress .spinner {
              display: block;
              position: fixed;
              z-index: 1031;
              top: 25%;
              size: 50px;
              right: 50%;
            }
            
          `;
          return <style>{modifiedCSS}</style>;
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
