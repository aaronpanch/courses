import { useRouter } from "next/router";
import ErrorPage from "next/error";
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
    <main className="p-7 sm:py-14">
      <article
        className={classNames(
          "prose prose-sm mx-auto sm:prose",
          proseStyles["prose-headings"]
        )}
      >
        <ReactMarkdown>{course.content}</ReactMarkdown>
      </article>
    </main>
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
