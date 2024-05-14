/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
        <Head>
          <title>TRIPLE S GAMING</title>
          <meta
            name="description"
            content="TRIPLE S GAMING - Welcome to our gaming community!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to TRIPLE S GAMING
          </h1>
          <p className="text-lg mb-8">
            Join us for exciting gaming adventures!
          </p>
          <Link href="/dashboard">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Now
            </button>
          </Link>
        </main>

        <footer className="mt-8">
          <p>
            &copy; {new Date().getFullYear()} TRIPLE S GAMING. All rights
            reserved.
          </p>
        </footer>
      </div> */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Triple S Gaming</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-red-500" href="/dashboard">
              Triple S Gaming!
            </a>
          </h1>

          <p className="mt-3 text-2xl">The home of Triple S Gaming Team.</p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"></div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://www.triplesgaming.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img
              src="/logo.png"
              alt="Triple S Gaming Logo"
              className="w-24 ml-2"
            />
          </a>
        </footer>
      </div>
    </>
  );
}
