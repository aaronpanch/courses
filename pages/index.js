import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { getCourses } from "lib/api";

export default function Home({ courses }) {
  return (
    <div>
      <Head>
        <title>Courses | Aaron Panchal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="border-b sticky top-0 bg-white">
        <div className="max-w-xl mx-auto p-7 sm:py-14">
          <h1 className="font-display font-bold lowercase text-xl sm:text-4xl">
            Courses
          </h1>
        </div>
      </nav>

      <main className="p-7 sm:py-9 max-w-xl mx-auto">
        {courses.map(({ code, term, title, excerpt, courseId }) => (
          <Link href={`/${courseId}`} key={`${code}_${term}`}>
            <a>
              <div className="flex flex-col sm:flex-row gap-y-4 gap-x-7 text-sm sm:text-base p-4 -m-4 sm:p-7 sm:-m-7 hover:bg-gray-100 rounded-lg">
                <div>
                  <p className="font-mono text-lg sm:text-xl">{code}</p>
                  <p className="text-gray-500 font-normal">{term}</p>
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <h2 className="font-bold font-display">{title}</h2>
                  <div className="prose-sm">
                    <ReactMarkdown>{excerpt}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </a>
          </Link>
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
