export default function ExperienceComponent({
  date,
  affair,
  company,
  description,
}) {
  return (
    <div className="border-b border-black/5 pb-4 last:border-none">
      <p className="text-xs text-gray-500">{date}</p>
      <p className="font-semibold text-[#E63A27]">{affair}</p>
      <p className="text-sm text-gray-700">{company}</p>

      {description && (
        <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  );
}
