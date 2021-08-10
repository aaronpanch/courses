import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Courses | Aaron Panchal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-center p-7 border-b sm:p-16">
        <h1 className="font-bold tracking-widest uppercase sm:text-2xl">
          Courses
        </h1>
      </nav>

      <main></main>
    </div>
  );
}
