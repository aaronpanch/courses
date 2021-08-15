import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import { getPostBySlug, listCourseIds } from "lib/api";

import proseStyles from "styles/prose.module.css";

export default function CoursePage({ course }) {
  const router = useRouter();

  if (!router.isFallback && !course?.courseId) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>
          {course.code} {course.term} | Courses | Aaron Panchal
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="border-b sticky top-0 bg-white z-10 p-7">
        <div className="flex max-w-xl sm:mx-auto">
          <Link href="/">
            <a className="block">
              <h1 className="font-display font-bold lowercase text-xl">
                Courses
              </h1>
            </a>
          </Link>
        </div>
      </nav>

      <main className="p-7 sm:py-14">
        <article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={classNames(
            "prose prose-sm sm:mx-auto sm:prose",
            proseStyles["prose-headings"]
          )}
        >
          <ReactMarkdown>{course.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const course = await getPostBySlug(params.courseId);
  return { props: { course } };
}

export async function getStaticPaths() {
  const courses = await listCourseIds();

  return {
    paths: courses.map(({ courseId }) => ({
      params: { courseId },
    })),
    fallback: false,
  };
}
