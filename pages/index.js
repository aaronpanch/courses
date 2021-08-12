import Head from "next/head";
import Link from "next/link";

import { getCourses } from "../lib/api";

export default function Home({ courses }) {
  return (
    <div>
      <Head>
        <title>Courses | Aaron Panchal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-7 border-b sm:p-14 sticky top-0 bg-white">
        <h1 className="font-display font-bold lowercase text-xl sm:text-4xl">
          Courses
        </h1>
      </nav>

      <main className="p-7 sm:px-14 max-w-4xl">
        {courses.map(({ code, term, title, excerpt, slug }) => (
          <div
            key={`${code}_${term}`}
            className="flex gap-x-7 text-sm sm:text-base"
          >
            <div>
              <p className="font-mono text-lg sm:text-xl">{code}</p>
              <p className="text-gray-500 font-normal">{term}</p>
            </div>
            <div className="flex-1 flex flex-col gap-y-2">
              <Link href={`/courses/${slug}`}>
                <a>
                  <h2 className="font-bold font-display">{title}</h2>
                </a>
              </Link>
              <p className="leading-relaxed">{excerpt}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const courses = await getCourses();

  return {
    props: { courses },
  };
}
