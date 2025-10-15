import {
  BsFlagFill,
  BsClockHistory,
  BsGlobeAmericas,
  BsShieldCheck,
  BsHeartPulse,
} from "react-icons/bs";
import Image from "next/image";

/** Set this to true and add your images below if you want a small image strip */
const SHOW_IMAGES = true;

export default function MissionHistory() {
  return (
    <section aria-labelledby="mission-history" className="bg-white rounded-xl">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <header className="mb-8">
          <h2
            id="mission-history"
            className="text-3xl md:text-4xl font-semibold"
          >
            <span className="text-primary">Our Mission</span> &{" "}
            <span className="text-secondary">History</span>
          </h2>
          <p className="mt-2 text-gray-700">
            Empowering people with disabilities and growing prevention &
            awareness in our community.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Mission */}
          <article aria-labelledby="mission-title" className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <BsFlagFill className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 id="mission-title" className="text-xl font-semibold">
                Our Mission
              </h3>
            </div>

            <blockquote className="bg-primary/5 rounded-xl p-5 md:p-6">
              <p className="text-gray-900">
                “The mission of the Association for the Rights of Citizens with
                handicaps is to
                <span className="font-semibold text-primary">
                  {" "}
                  empower children and adults with disabilities
                </span>{" "}
                to reach their full potential, and to
                <span className="font-semibold text-primary">
                  {" "}
                  increase prevention and awareness
                </span>{" "}
                in the community.”
              </p>
            </blockquote>

            <ul className="mt-4 grid gap-2 text-gray-800">
              <li className="flex items-start gap-2">
                <BsShieldCheck
                  className="mt-1 h-4 w-4 text-secondary"
                  aria-hidden="true"
                />
                Promote health, safety, and achievement.
              </li>
              <li className="flex items-start gap-2">
                <BsHeartPulse
                  className="mt-1 h-4 w-4 text-secondary"
                  aria-hidden="true"
                />
                Support caregivers with practical, compassionate guidance.
              </li>
              <li className="flex items-start gap-2">
                <BsGlobeAmericas
                  className="mt-1 h-4 w-4 text-secondary"
                  aria-hidden="true"
                />
                Equip schools and neighborhoods to be more inclusive.
              </li>
            </ul>
          </article>

          {/* History */}
          <article aria-labelledby="history-title" className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <BsClockHistory
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
              <h3 id="history-title" className="text-xl font-semibold">
                Our History
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-800">
                <span className="font-semibold">
                  1952 — Founded by parents:
                </span>{" "}
                families who dreamed of a world where their children with
                disabilities would not be discarded or disregarded.
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">
                  Today — Same vision, broader impact:
                </span>{" "}
                building a world where
                <span className="text-primary font-semibold">
                  {" "}
                  all people are valued
                </span>{" "}
                and encouraged to contribute.
              </p>
              <p className="text-gray-800">
                ARCh continues to{" "}
                <span className="font-semibold">
                  promote the health, safety and achievement
                </span>{" "}
                of children and adults with disabilities through programs,
                prevention, and community education.
              </p>
            </div>
          </article>
        </div>

        {/* Optional image strip (toggle SHOW_IMAGES) */}
        {SHOW_IMAGES && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <figure className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden shadow-soft">
              <Image
                src="/photos/teen-time.webp"
                alt="ARCh program moment"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </figure>
            <figure className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden shadow-soft">
              <Image
                src="/photos/hero4.webp"
                alt="Inclusive classroom"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </figure>
            <figure className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden shadow-soft">
              <Image
                src="/photos/hero2.webp"
                alt="arch gains camp crafts"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </figure>
            <figure className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden shadow-soft">
              <Image
                src="/photos/gains2.webp"
                alt="arch gains camp activity"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
