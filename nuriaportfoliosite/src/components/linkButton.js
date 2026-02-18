import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function LinkButton({ src = "#", text }) {
  return (
    <div className="mt-4 flex items-center gap-x-6">
      <a
        href={src}
        className="
          group
          inline-flex items-center gap-2
          text-[18px] font-semibold
          text-[#E63A27]
          transition-colors
          hover:text-[#FF5542]
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-[#E63A27]
        "
      >
        {text}
        <ArrowRightIcon
          className="
            h-5 w-5
            transition-transform transition-colors
            group-hover:translate-x-1
            group-hover:text-[#FF5542]
          "
        />
      </a>
    </div>
  );
}
