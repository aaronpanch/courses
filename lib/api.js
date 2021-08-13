import { readFile } from "fs/promises";
import { join, basename, dirname } from "path";
import matter from "gray-matter";
import glob from "fast-glob";

const contentDir = join(process.cwd(), "_content");

export function getCourseItems() {
  return glob(join(contentDir, "*", "index.md"));
}

export async function listCourseSlugs() {
  const files = await getCourseItems();
  return files.map((file) => basename(dirname(file)));
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
  const listingFiles = await getCourseItems();
  return Promise.all(listingFiles.map(parseFile));
}

export function getCourseBySlug(slug) {
  return parseFile(join(contentDir, slug, "index.md"));
}
