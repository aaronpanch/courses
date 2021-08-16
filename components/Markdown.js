import ReactMarkdown from "react-markdown";
import ContentLink from "components/ContentLink";

const components = {
  a: ContentLink,
};

export default function Markdown({ node, children }) {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
