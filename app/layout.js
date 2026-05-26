import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}