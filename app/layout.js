import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "Arif Muhammad Rizki — Portfolio",
  description:
    "Portfolio of Arif Muhammad Rizki, Application Engineer Software in Jakarta. Live sites, the stack behind each one, and IT experience from the CV.",
  authors: [{ name: "Arif Muhammad Rizki" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
