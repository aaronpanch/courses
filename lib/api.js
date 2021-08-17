import { readFile } from "fs/promises";
import { join, basename, dirname, extname } from "path";
import matter from "gray-matter";
import glob from "fast-glob";

const contentDir = join(process.cwd(), "_content");

async function parseFile(file) {
  const fileContents = await readFile(file, { encoding: "utf-8" });
  const { content, data } = matter(fileContents);

  return {
    ...data,
    slug: basename(file).replace(extname(file), ""),
    content: content.trim(),
    courseId: basename(dirname(file)),
  };
}

export async function listCourseIds() {
  const courseIndexes = await glob(join(contentDir, "*", "index.md"));
  return courseIndexes.map((file) => ({
    courseId: basename(dirname(file)),
  }));
}

export async function listPosts() {
  const files = await glob(join(contentDir, "*", "*.md"), {
    ignore: "**/index.md",
  });

  return files.map((file) => ({
    courseId: basename(dirname(file)),
    slug: basename(file).replace(extname(file), ""),
  }));
}

export async function getCourses() {
  const courses = await glob(join(contentDir, "*", "index.md"));
  return Promise.all(courses.map(parseFile));
}

export function getPostBySlug(courseId, slug) {
  return parseFile(join(contentDir, courseId, slug || "index") + ".md");
}

export async function getCoursePosts(courseId) {
  const posts = await glob(join(contentDir, courseId, "*.md"), {
    ignore: "**/index.md",
  });
  return Promise.all(posts.map(parseFile));
}
