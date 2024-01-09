import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "KBNU RANCAEKEK",
  description: "Dibuat dengan Cinta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          scroll-smooth bg-slate-200 min-h-screen ${poppins.className}
        `}
      >
        <Navbar />
        <div className="mx-auto py-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
