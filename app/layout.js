import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "With Joanna Beauty | Aesthetic Treatments & Wellness",
  description:
    "Premium aesthetic treatments, skin health, nutrition and wellness support by Joanna. Natural beauty, advanced aesthetics and personalised care.",
  keywords: [
    "aesthetic treatments",
    "skin treatments",
    "RF microneedling",
    "PRP facial",
    "beauty clinic",
    "nutrition wellness",
    "Rochdale aesthetics",
    "With Joanna Beauty",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}