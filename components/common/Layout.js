import React from "react";
import Footer from "./Footer";
import Nav1 from "./Nav1";
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
      <div className="flex min-h-screen justify-between flex-col">
        {/* <Nav /> */}
        <header className=" z-50">
          <Nav1 />
        </header>
        {/** Main content */}
        <main className="relative">{children}</main>
        {/** Footer */}
        <footer className="relative mt-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}
