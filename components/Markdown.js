import ReactMarkdown from "markdown-to-jsx";

import ContentLink from "components/ContentLink";

const overrides = {
  a: { component: ContentLink },
};

export default function Markdown({ node, children }) {
  return <ReactMarkdown options={{ overrides }}>{children}</ReactMarkdown>;
}
