export default function ExperienceComponent({
  date,
  affair,
  company,
  description,
  link,
}) {
  return (
    <div className="border-b border-[#270400]/10 pb-5 last:border-none">
      <p className="font-manrope text-sm uppercase tracking-[0.08em] text-[#270400]/55">
        {date}
      </p>
      <p className="font-urbanist text-2xl font-semibold text-[#E63A27]">{affair}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-manrope text-base font-semibold text-[#270400] transition-opacity hover:opacity-70"
        >
          {company}
        </a>
      ) : (
        <p className="font-manrope text-base font-semibold text-[#270400]">
          {company}
        </p>
      )}

      {description && (
        <p className="mt-2 whitespace-pre-line font-manrope text-base leading-7 text-[#270400]/78">
          {description}
        </p>
      )}
    </div>
  );
}
