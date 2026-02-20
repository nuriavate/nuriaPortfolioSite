import { Link } from "react-router-dom";

export default function ProjectHeader({
  categoryKey,
  categoryLabel = "UX/UI DESIGN",
  title,
  timeline,
  client,
  keyActivities = [],
  linkUrl,
  linkText = "Check out the site",
  awardTitle,
  awardIssuer,
}) {
  return (
    <section className=" pt-24 sm:pt-14 sm:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="font-urbanist font-bold flex items-center gap-2 text-base uppercase text-[#270400]">
            <li>
              <Link to="/projects" className="hover:text-[#270400] transition-colors">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              {categoryKey ? (
                <Link
                  to={`/projects?cat=${categoryKey}`}
                  className="hover:text-[#270400] transition-colors"
                >
                  {categoryLabel}
                </Link>
              ) : (
                categoryLabel
              )}
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="font-urbanist font-semibold mt-3 text-5xl leading-tight text-[#270400] sm:text-6xl">
          {title}
        </h1>

        {/* 2-col meta grid */}
        <div className="mt-10 grid gap-y-10 lg:grid-cols-2 lg:gap-x-24">
          {/* Left column */}
          <div className="space-y-10">
            <MetaBlock label="TIMELINE" value={timeline} />
            <MetaBlock label="CLIENT" value={client} />
          </div>

          {/* Right column */}
          <div>
            <p className="font-urbanist font-black text-lg uppercase text-[#270400]">
              KEY ACTIVITIES
            </p>

            <ul className="font-raleway mt-3 space-y-1 text-base leading-6 text-[#270400]">
              {keyActivities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            {linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm font-medium text-[#E63A27] hover:text-[#270400] transition"
              >
                {linkText}
              </a>
            )}
          </div>
        </div>

        {/* Award */}
        {awardTitle && awardIssuer && (
          <div className="mt-12">
            <AwardInline title={awardTitle} issuer={awardIssuer} />
          </div>
        )}
      </div>
    </section>
  );
}

function MetaBlock({ label, value }) {
  return (
    <div>
      <p className="font-urbanist font-black text-lg uppercase text-[#270400]">
        {label}
      </p>
      <p className="font-raleway mt-2 text-base text-[#270400]">{value}</p>
    </div>
  );
}

function AwardInline({ title, issuer }) {
  return (
    <div className="flex items-start gap-4">
      <PlantCrownIcon className="mt-1 h-5 w-5 text-[#E63A27]" />
      <div>
        <p className="text-sm font-medium text-[#E63A27]">{title}</p>
        <p className="mt-1 text-base text-[#270400]/70">{issuer}</p>
      </div>
    </div>
  );
}

function PlantCrownIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7.65445 8.5C7.23256 9.76332 7.00024 11.1442 7.00024 12.5909C7.00024 18.6158 11.0297 23.5 16.0002 23.5C20.9708 23.5 25.0002 18.6158 25.0002 12.5909C25.0002 11.1442 24.7679 9.76332 24.346 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.7502 28C19.7502 28 18.7273 23.5 16.0002 23.5C13.2732 23.5 12.2502 28 12.2502 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.7806 4.34451C26.2184 6.84451 24.2509 8.5 24.2509 8.5C24.2509 8.5 21.8456 7.65549 21.4077 5.15549C20.9699 2.65549 22.9374 1 22.9374 1C22.9374 1 25.3428 1.84451 25.7806 4.34451Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.6415 14.7089C27.7195 16.6092 25.117 15.8504 25.117 15.8504C25.117 15.8504 24.4364 13.1914 26.3585 11.2911C28.2805 9.39083 30.8831 10.1496 30.8831 10.1496C30.8831 10.1496 31.5636 12.8086 29.6415 14.7089Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3505 23.7844C23.1005 22.921 22.7502 20.5 22.7502 20.5C22.7502 20.5 24.65 18.9424 26.9 19.8058C29.15 20.6692 29.5002 23.0901 29.5002 23.0901C29.5002 23.0901 27.6005 24.6477 25.3505 23.7844Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.65001 23.7842C8.90001 22.9208 9.25024 20.4998 9.25024 20.4998C9.25024 20.4998 7.35048 18.9423 5.10048 19.8056C2.85048 20.669 2.50024 23.09 2.50024 23.09C2.50024 23.09 4.40001 24.6476 6.65001 23.7842Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.35847 14.7089C4.2805 16.6092 6.88305 15.8504 6.88305 15.8504C6.88305 15.8504 7.56356 13.1914 5.64153 11.2911C3.7195 9.39083 1.11695 10.1496 1.11695 10.1496C1.11695 10.1496 0.436438 12.8086 2.35847 14.7089Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.22005 4.34451C5.78223 6.84451 7.74976 8.5 7.74976 8.5C7.74976 8.5 10.1551 7.65549 10.5929 5.15549C11.0308 2.65549 9.06322 1 9.06322 1C9.06322 1 6.65787 1.84451 6.22005 4.34451Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
