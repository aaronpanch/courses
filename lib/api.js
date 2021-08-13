import { readFile } from "fs/promises";
import { join, basename, dirname, extname } from "path";
import matter from "gray-matter";
import glob from "fast-glob";

const contentDir = join(process.cwd(), "_content");

export async function listPosts() {
  const files = await glob(join(contentDir, "*", "*.md"));
  return files.map((file) => ({
    courseId: basename(dirname(file)),
    slug: [basename(file).replace(extname(file), "")],
  }));
}

export async function parseFile(file) {
  const fileContents = await readFile(file, { encoding: "utf-8" });
  const { content, data } = matter(fileContents);

  return {
    ...data,
    content: content.trim(),
    slug: basename(dirname(file)),
  };
}

export async function getCourses() {
  const courses = await glob(join(contentDir, "*", "index.md"));
  return Promise.all(courses.map(parseFile));
}

export function getPostBySlug(courseId, slug) {
  return parseFile(join(contentDir, courseId, ...(slug || ["index"])) + ".md");
}
