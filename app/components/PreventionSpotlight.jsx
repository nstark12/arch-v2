import Link from "next/link";
import {
  BsPersonHeart, // Baby / care
  BsDropletHalf, // Lead exposure
  BsCircleHalf, // Water beads (abstract)
  BsMoonStars, // Safe sleep
} from "react-icons/bs";

const topics = [
  {
    title: "Shaken Baby Syndrome",
    href: "/prevention/shaken-baby",
    Icon: BsPersonHeart,
    blurb: "Crying peaks at 6–8 weeks. Even seconds of shaking can be fatal.",
    know: "Crying is normal — never shake a baby.",
    do: "Lay baby in crib, take a break, call for help.",
  },
  {
    title: "Lead Exposure",
    href: "/prevention/lead",
    Icon: BsDropletHalf,
    blurb: "Lead harms brain development — often from paint, dust, or water.",
    know: "Homes built before 1978 are higher risk.",
    do: "Wet-clean dust, run cold water, test if concerned.",
  },
  {
    title: "Water Beads",
    href: "/prevention/water-beads",
    Icon: BsCircleHalf,
    blurb: "They expand inside the body and can block airways or intestines.",
    know: "A single bead can be dangerous if swallowed.",
    do: "Avoid in homes with infants/toddlers; store locked.",
  },
  {
    title: "Safe Sleep",
    href: "/prevention/safe-sleep",
    Icon: BsMoonStars,
    blurb: "A clear, flat crib — on the back — reduces the risk of death.",
    know: "No pillows, bumpers, blankets, or toys.",
    do: "Use a firm mattress and fitted sheet only.",
  },
];

export default function PreventionSpotlight() {
  return (
    <section
      aria-labelledby="prevention"
      className="full-bleed"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,131,192,1) 0%, rgba(0,131,192,0.9) 40%, rgba(118,190,67,0.9) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Prevention</div>
            <h2
              id="prevention"
              className="text-3xl md:text-4xl font-semibold text-white"
            >
              Stop tragedies before they start.
            </h2>
            <p className="mt-3 text-white/90 max-w-2xl">
              Quick, shareable guidance for caregivers, classrooms, and the
              community.
            </p>
          </div>
          <Link
            href="/prevention"
            className="hidden sm:inline-flex bg-white text-primary px-4 py-2 rounded font-semibold hover:opacity-90"
          >
            See all topics →
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {topics.map(({ title, href, Icon, blurb, know, do: todo }) => (
            <Link
              key={href}
              href={href}
              className="group block rounded-xl bg-white shadow-soft p-5 hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-secondary)]"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(0,131,192,0.12)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-700 mt-1 text-sm">{blurb}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <p className="text-gray-800">
                    <span className="font-semibold text-primary">Know: </span>
                    {know}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <p className="text-gray-800">
                    <span className="font-semibold text-primary">Do: </span>
                    {todo}
                  </p>
                </div>
              </div>

              <span className="mt-4 inline-block text-primary font-medium">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-8">
          <Link
            href="/prevention"
            className="inline-flex bg-white text-primary px-4 py-2 rounded font-semibold hover:opacity-90"
          >
            See all topics →
          </Link>
        </div>
      </div>
    </section>
  );
}
