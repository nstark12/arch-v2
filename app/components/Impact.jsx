import Link from "next/link";
import Image from "next/image";
import {
  BsPeopleFill,
  BsHeartFill,
  BsStars,
  BsCalendar2EventFill,
} from "react-icons/bs";

export default function Impact() {
  return (
    <section
      aria-labelledby="impact"
      className="full-bleed"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,94,138,1) 0%, rgba(0,131,192,1) 55%, rgba(0,131,192,0.95) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left side: text content */}
          <div>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
              Impact
            </p>
            <h2
              id="impact"
              className="text-3xl md:text-4xl font-semibold text-white"
            >
              Programs that build skills, friendships, and confidence.
            </h2>
            <p className="mt-3 text-white/90 text-lg">
              From summer camps to classroom workshops, ARCh helps people belong
              and thrive—today and for life.
            </p>

            {/* Stat grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3 md:gap-4">
              <Stat
                icon={<BsPeopleFill className="h-5 w-5" aria-hidden="true" />}
                label="People served / year"
                value="1,200+"
              />
              <Stat
                icon={
                  <BsCalendar2EventFill
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                }
                label="Community events"
                value="150+"
              />
              <Stat
                icon={<BsStars className="h-5 w-5" aria-hidden="true" />}
                label="School partners"
                value="30+"
              />
              <Stat
                icon={<BsHeartFill className="h-5 w-5" aria-hidden="true" />}
                label="Active volunteers"
                value="50+"
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/stories"
                className="px-5 py-3 rounded bg-white text-primary font-semibold hover:brightness-95"
              >
                Read stories
              </Link>
              <Link
                href="/get-involved/volunteer"
                className="px-5 py-3 rounded bg-secondary font-semibold text-black hover:brightness-95"
              >
                Become a volunteer
              </Link>
            </div>
          </div>

          {/* Right side: image */}
          <div className="relative h-64 sm:h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/photos/gains-staff.webp"
              alt="ARCh gains camp staff smiling"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** High-contrast stat chip */
function Stat({ icon, value, label }) {
  return (
    <div className="rounded-xl p-4 md:p-5 bg-white/5">
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[var(--color-secondary)] text-black font-semibold">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="mt-3 text-3xl md:text-4xl font-semibold text-white leading-none">
        {value}
      </div>
    </div>
  );
}
