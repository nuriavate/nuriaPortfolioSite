export default function ExperienceComponent({
  date,
  affair,
  company,
  description,
}) {
  return (
    <div className="border-b border-black/5 pb-4 last:border-none">
      <p className="font-raleway text-base text-[#270400] ">{date}</p>
      <p className="font-urbanist text-2xl font-semibold text-[#E63A27]">{affair}</p>
      <p className="text-base text-[#270400] font-raleway font-semibold">{company}</p>

      {description && (
        <p className="mt-1 text-base text-[#270400] whitespace-pre-line font-raleway">
          {description}
        </p>
      )}
    </div>
  );
}
