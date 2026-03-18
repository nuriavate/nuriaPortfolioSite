import { Link } from "react-router-dom";

export default function ButtonText({
  src,
  to,
  text,
  as = "link",
  type,
  className = "",
  onClick,
}) {
  const Component = as === "button" ? "button" : to ? Link : "a";
  const targetProps =
    as === "button" ? { type: type || "button" } : to ? { to } : { href: src };

  return (
    <Component
      {...targetProps}
      onClick={onClick}
      className={`font-grace grace-soft inline-flex items-center justify-center rounded-md bg-[#E63A27] px-4 py-2 text-2xl leading-none uppercase text-white transition-colors duration-300 hover:bg-[#FF5542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63A27] ${className}`.trim()}
    >
      {text}
    </Component>
  );
}
