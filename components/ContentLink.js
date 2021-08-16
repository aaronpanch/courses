import Link from "next/link";

export default function ContentLink({ href, node, ...props }) {
  return href.includes("http") ? (
    <a href={href} {...props} />
  ) : (
    <Link href={href}>
      <a {...props} />
    </Link>
  );
}
