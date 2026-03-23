"use client";

import { useState } from "react";

const whatsappLink =
  "https://wa.me/447492828818?text=Hi%20Joanna%20I’d like to book a treatment.";

const content = {
  en: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    title: "Natural beauty, advanced aesthetics, real confidence.",
    text:
      "Premium skin and aesthetic treatments in Rochdale, created for women who want visible results, personal care, and an elegant experience.",
    book: "Book Appointment",
    whatsapp: "Message on WhatsApp",
    treatmentsTitle: "Popular Treatments",
    treatments: [
      ["Hydro Facial", "Deep cleansing, hydration, and glow."],
      ["RF Microneedling", "Skin tightening and texture refinement."],
      ["PRP / PRF", "Natural regeneration and rejuvenation."],
      ["Chemical Peels", "Brighter tone and improved skin clarity."],
      ["Mesotherapy", "Targeted hydration and revitalisation."],
      ["Botox", "Refined anti-wrinkle treatment."]
    ],
    packagesTitle: "Signature Packages",
    packages: [
      ["Glow Skin Package", "from £95"],
      ["Anti-Age Premium", "from £180"],
      ["Skin Transformation Program", "from £320"]
    ],
    contactTitle: "Contact",
    contactText: "WhatsApp, Instagram, and online booking coming soon.",
    footer: "Premium skin and aesthetic treatments"
  },
  pl: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    title: "Naturalne piękno, nowoczesna estetyka, prawdziwa pewność siebie.",
    text:
      "Premium zabiegi pielęgnacyjne i estetyczne w Rochdale dla kobiet, które chcą widocznych efektów, indywidualnej opieki i eleganckiego doświadczenia.",
    book: "Umów wizytę",
    whatsapp: "Napisz na WhatsApp",
    treatmentsTitle: "Popularne zabiegi",
    treatments: [
      ["Hydro Facial", "Dogłębne oczyszczanie, nawilżenie i glow."],
      ["RF Microneedling", "Ujędrnienie skóry i poprawa tekstury."],
      ["PRP / PRF", "Naturalna regeneracja i odmłodzenie."],
      ["Peelingi chemiczne", "Jaśniejszy koloryt i czystsza skóra."],
      ["Mezoterapia", "Celowane nawilżenie i rewitalizacja."],
      ["Botox", "Dopracowany zabieg anti-wrinkle."]
    ],
    packagesTitle: "Pakiety",
    packages: [
      ["Glow Skin Package", "od £95"],
      ["Anti-Age Premium", "od £180"],
      ["Skin Transformation Program", "od £320"]
    ],
    contactTitle: "Kontakt",
    contactText: "WhatsApp, Instagram i rezerwacje online już w przygotowaniu.",
    footer: "Premium zabiegi pielęgnacyjne i estetyczne"
  }
};

export default function Page() {
  const [lang, setLang] = useState("en");
  const c = content[lang];

  return (
    <main
  style={{
    backgroundImage:
      "linear-gradient(rgba(8,16,14,0.5), rgba(8,16,14,0.75)), url('/emerald-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh"
  }}
>
      <nav
        style={{
          borderBottom: "1px solid rgba(212,175,55,.2)",
          background: "rgba(8,16,14,.4)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <img
            src="/logo-with-joanna.png.png"
            alt="With Joanna"
            style={{ height: 70 }}
          />

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("pl")}>PL</button>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h1 style={{ fontSize: 52 }}>{c.title}</h1>
        <p style={{ opacity: 0.85 }}>{c.text}</p>

        <div style={{ marginTop: 30 }}>
          <a
            href="#contact"
            style={{
              background: "#d4af37",
              color: "#111",
              padding: "14px 22px",
              borderRadius: 20,
              fontWeight: 700,
              marginRight: 10
            }}
          >
            {c.book}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            style={{
              border: "1px solid #d4af37",
              padding: "14px 22px",
              borderRadius: 20
            }}
          >
            {c.whatsapp}
          </a>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <h2>{c.treatmentsTitle}</h2>
        {c.treatments.map(([t, d]) => (
          <div
            key={t}
            style={{
              background: "rgba(255,255,255,.08)",
              padding: 20,
              marginBottom: 12,
              borderRadius: 20
            }}
          >
            <h3>{t}</h3>
            <p style={{ opacity: 0.7 }}>{d}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: "60px 24px", background: "rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>{c.packagesTitle}</h2>
          {c.packages.map(([t, p]) => (
            <div key={t} style={{ marginBottom: 12 }}>
              <strong>{t}</strong> — <span style={{ color: "#d4af37" }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>{c.contactTitle}</h2>
          <p>{c.contactText}</p>

          <a href={whatsappLink} target="_blank">
            WhatsApp
          </a>
        </div>
      </section>

      <footer style={{ padding: 20, opacity: 0.6 }}>
        {c.brand} • {c.location}
      </footer>
    </main>
  );
}
