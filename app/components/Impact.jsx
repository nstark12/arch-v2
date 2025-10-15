import Link from "next/link";

export default function Impact() {
  return (
    <section
      aria-labelledby="impact"
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div
        className="aspect-[4/3] bg-white rounded-xl border shadow-soft section-gradient"
        role="img"
        aria-label="Camp and community programs collage placeholder"
      />
      <div>
        <h2 id="impact" className="text-2xl font-semibold">
          Impact you can see
        </h2>
        <p className="text-gray-800 mt-3">
          From summer camps to classroom workshops, ARCh programs help people
          build skills, friendships, and confidence.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/stories"
            className="px-5 py-3 rounded border hover:bg-gray-50"
          >
            Read stories
          </Link>
          <Link
            href="/get-involved/volunteer"
            className="px-5 py-3 rounded bg-secondary font-semibold hover:brightness-95"
          >
            Become a volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
