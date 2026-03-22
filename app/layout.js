import "./globals.css";

export const metadata = {
  title: "With Joanna Beauty",
  description: "Premium skin and aesthetic treatments in Rochdale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
