import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import { getPostBySlug, listPosts } from "lib/api";

import proseStyles from "styles/prose.module.css";

export default function Post({ course }) {
  const router = useRouter();

  if (!router.isFallback && !course?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <article
      className={classNames("prose mx-auto", proseStyles["prose-headings"])}
    >
      <ReactMarkdown>{course.content}</ReactMarkdown>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const course = await getPostBySlug(params.courseId, params.slug);
  return { props: { course } };
}

export async function getStaticPaths() {
  const courses = await listPosts();

  return {
    paths: courses.map(({ courseId, slug }) => ({
      params: { courseId, slug: slug[0] === "index" ? null : slug },
    })),
    fallback: false,
  };
}
