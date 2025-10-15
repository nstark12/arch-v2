import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "ARCh | Empowering Lives",
  description:
    "Resources and support for individuals with disabilities, parents, and the community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white text-gray-900">
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-4 py-2 rounded shadow-soft"
        >
          Skip to main content
        </a>

        {/* Safety bar with Quick Exit */}

        {children}
      </body>
    </html>
  );
}
