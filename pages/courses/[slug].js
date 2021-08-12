import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import { getCourseBySlug, listCourseSlugs } from "lib/api";

import proseStyles from "styles/prose.module.css";

export default function Course({ course }) {
  const router = useRouter();

  if (!router.isFallback && !course?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <article
      className={classNames("prose m-auto", proseStyles["prose-headings"])}
    >
      <ReactMarkdown>{course.content}</ReactMarkdown>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const course = await getCourseBySlug(params.slug);
  return { props: { course } };
}

export async function getStaticPaths() {
  const courses = await listCourseSlugs();

  return {
    paths: courses.map((slug) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
}
