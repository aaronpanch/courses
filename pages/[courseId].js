import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";

import { getPostBySlug, getCoursePosts, listCourseIds } from "lib/api";
import Markdown from "components/Markdown";

import proseStyles from "styles/prose.module.css";

const formatDate = (date) => new Intl.DateTimeFormat("en-US").format(date);

export default function CoursePage({ course, posts }) {
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
        <section>
          <article
            className={classNames(
              "prose prose-sm sm:mx-auto sm:prose",
              proseStyles["prose-headings"]
            )}
          >
            <Markdown>{course.content}</Markdown>
          </article>
        </section>

        <section className="max-w-xl sm:mx-auto mt-9">
          <ul className="divide-y">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/${course.courseId}/${post.slug}`}>
                  <a className="flex flex-col gap-y-2 hover:bg-gray-100 rounded-lg p-4 -mx-4 sm:p-7 sm:-mx-7">
                    <div className="flex gap-x-2 items-center justify-between">
                      <h2 className="font-display text-lg">{post.title}</h2>
                      {post.postedAt && (
                        <p className="text-gray-500 font-normal">
                          {formatDate(post.postedAt * 1000)}
                        </p>
                      )}
                    </div>
                    <div className="prose prose-sm">
                      <Markdown>{post.excerpt}</Markdown>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const course = await getPostBySlug(params.courseId);
  const posts = await getCoursePosts(params.courseId);
  return { props: { course, posts } };
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
