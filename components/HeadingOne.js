import classNames from "classnames";

export default function HeadingOne({ level, node, className, ...props }) {
  return (
    <h1 className={classNames("text-2xl font-display", className)} {...props} />
  );
}
