import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import { getPostBySlug, listPosts } from "lib/api";

import proseStyles from "styles/prose.module.css";

export default function Post({ course, post }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <nav className="border-b sticky top-0 bg-white z-10 p-7">
        <div className="flex max-w-xl sm:mx-auto">
          <h1 className="font-display font-bold text-xl">
            {course.code}—{course.term}
          </h1>
        </div>
      </nav>

      <main className="p-7 sm:py-14">
        <article
          className={classNames(
            "prose prose-sm mx-auto sm:prose",
            proseStyles["prose-headings"]
          )}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const course = await getPostBySlug(params.courseId);
  const post = await getPostBySlug(params.courseId, params.slug);
  return { props: { course, post } };
}

export async function getStaticPaths() {
  const courses = await listPosts();

  return {
    paths: courses.map(({ courseId, slug }) => ({
      params: { courseId, slug },
    })),
    fallback: false,
  };
}
