import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      {/** Head */}
      <Head>
        <title>
          {title
            ? title +
              " | Institute of Information and Communication Technology,SUST"
            : "Institute of Information and Communication Technology,SUST"}
        </title>
        <meta name="description" content="IICT,SUST" />
        <link rel="icon" href="/iict-white.png" />
      </Head>
      <div className="flex min-h-screen flex-col">
        {/* <Nav /> */}
        <header>
          <Nav />
        </header>
        {/** Main content */}
        <main>{children}</main>
        {/** Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
