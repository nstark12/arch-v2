import Link from "next/link";

const preventionCards = [
  { title: "Shaken Baby Syndrome", href: "/prevention/shaken-baby" },
  { title: "Lead Exposure", href: "/prevention/lead" },
  { title: "Water Beads", href: "/prevention/water-beads" },
  { title: "Safe Sleep", href: "/prevention/safe-sleep" },
];

export default function PreventionSpotlight() {
  return (
    <section
      aria-labelledby="prevention"
      className="bg-gray-50 p-6 md:p-8 rounded-2xl border"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 id="prevention" className="text-2xl font-semibold">
          Prevention
        </h2>
        <Link
          href="/prevention"
          className="text-primary hover:text-primary-hover font-medium"
        >
          See all topics →
        </Link>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {preventionCards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block p-4 rounded-xl border hover:shadow-soft focus-visible:shadow-soft bg-white"
          >
            <div
              className="aspect-[4/3] bg-white rounded-lg border mb-3"
              role="img"
              aria-label={`${c.title} illustration placeholder`}
            />
            <h3 className="font-semibold">{c.title}</h3>
            <span className="text-sm text-primary mt-1 inline-block">
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
