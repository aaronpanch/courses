import { readFile } from "fs/promises";
import { join, basename, extname } from "path";
import matter from "gray-matter";
import glob from "fast-glob";

const contentDir = join(process.cwd(), "_content");

export function getCourseItems() {
  return glob(join(contentDir, "*", "index.md"));
}

export async function parseFile(file) {
  const fileContents = await readFile(file, { encoding: "utf-8" });
  const { content, data } = matter(fileContents);

  return {
    ...data,
    content: content.trim(),
    slug: basename(file).replace(extname(file), ""),
  };
}

export async function getCourses() {
  const listingFiles = await getCourseItems();
  return Promise.all(listingFiles.map(parseFile));
}
