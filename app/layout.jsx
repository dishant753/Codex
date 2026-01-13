import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: "Prem Industries | Precision Injection Moulding",
  description: "Premium industrial injection molding partner for tooling, molding, and assembly.",
  openGraph: {
    title: "Prem Industries",
    description: "Precision injection moulding for high-volume production.",
    images: ["/images/hero/hero-poster.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-ui-bg text-ui-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
