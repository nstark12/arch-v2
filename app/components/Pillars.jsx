import Link from "next/link";

const pillars = [
  {
    title: "For Individuals",
    blurb:
      "Programs, camps, and one-to-one support for children and adults with disabilities.",
    href: "/services/individuals",
  },
  {
    title: "For Parents & Caregivers",
    blurb:
      "Guidance, support groups, and practical tools to navigate services and school.",
    href: "/services/parents",
  },
  {
    title: "Community Education",
    blurb:
      "Workshops and trainings that build inclusive schools, teams, and neighborhoods.",
    href: "/services/community-education",
  },
];

export default function Pillars() {
  return (
    <section aria-labelledby="how-we-help">
      <h2 id="how-we-help" className="text-2xl font-semibold">
        How we help
      </h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="block card p-6 hover:shadow-soft"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="inline-block w-3 h-3 rounded-full bg-secondary mt-1"
              />
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-gray-700 mt-2">{p.blurb}</p>
                <span className="mt-4 inline-block text-primary font-medium">
                  Explore →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
