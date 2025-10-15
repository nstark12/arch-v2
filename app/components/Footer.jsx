import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg">ARCh</h3>
          <p className="text-gray-700 mt-2">
            Supporting individuals with disabilities, empowering families, and
            educating our community.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Get Involved</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/get-involved/volunteer"
                className="hover:text-primary"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-primary">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-primary">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact ARCh
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-primary">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-primary">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} ARCh. All rights reserved.
      </div>
    </footer>
  );
}
