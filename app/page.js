"use client";

import { useState } from "react";

const whatsappLink =
  "https://wa.me/447492828818?text=Hi%20Joanna%20%F0%9F%8C%B8%20I%E2%80%99d%20like%20to%20book%20a%20treatment.";

const content = {
  en: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    nav: ["Home", "Treatments", "Packages", "Blog", "Contact"],
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
    blogTitle: "Blog",
    blog: [
      "Is RF Microneedling worth it?",
      "Hydro Facial benefits for dull skin",
      "How to prepare for your aesthetic appointment"
    ],
    contactTitle: "Contact",
    contactText: "WhatsApp, Instagram, and online booking coming soon.",
    footer: "Premium skin and aesthetic treatments"
  },
  pl: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    nav: ["Start", "Zabiegi", "Pakiety", "Blog", "Kontakt"],
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
    blogTitle: "Blog",
    blog: [
      "Czy RF Microneedling naprawdę działa?",
      "Hydro Facial — korzyści dla skóry",
      "Jak przygotować się do wizyty estetycznej"
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
    background:
      "radial-gradient(circle at 15% 25%, rgba(212,175,55,0.12) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(212,175,55,0.1) 0%, transparent 40%), radial-gradient(circle at 50% 50%, #1c2f2a 0%, #0b1412 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif"
  }}
>
    <nav
      style={{
        borderBottom: "1px solid rgba(255,255,255,.12)",
        background: "#0f1a17",
        position: "sticky",
        top: 0
      }}
    >
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo-with-joanna.png.png"
              alt="With Joanna Beauty"
              style={{ height: 70, width: "auto", display: "block" }}
            />
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setLang("en")}
              style={{
                border: 0,
                borderRadius: 999,
                padding: "8px 12px",
                background: lang === "en" ? "#111" : "#fff",
                color: lang === "en" ? "#fff" : "#111"
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pl")}
              style={{
                border: 0,
                borderRadius: 999,
                padding: "8px 12px",
                background: lang === "pl" ? "#111" : "#fff",
                color: lang === "pl" ? "#fff" : "#111"
              }}
            >
              PL
            </button>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(139,106,66,.28)",
            borderRadius: 999,
            padding: "10px 16px",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: ".22em",
            background: "rgba(255,255,255,.8)"
          }}
        >
          With Joanna Beauty
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.08,
            maxWidth: 760,
            marginTop: 20
          }}
        >
          {c.title}
        </h1>
        <p style={{ color: "#6b7280", fontSize: 18, lineHeight: 1.8, maxWidth: 760 }}>
          {c.text}
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
          <a
            href="#contact"
            style={{ borderRadius: 18, padding: "14px 22px", background: "#111", color: "#fff", fontWeight: 700 }}
          >
            {c.book}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ borderRadius: 18, padding: "14px 22px", border: "1px solid #111", color: "#111", fontWeight: 700 }}
          >
            {c.whatsapp}
          </a>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
          {c.treatmentsTitle}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          {c.treatments.map(([title, desc]) => (
            <div
              key={title}
              style={{ background: "#fff", borderRadius: 24, padding: 22, boxShadow: "0 8px 24px rgba(0,0,0,.05)" }}
            >
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 26, marginTop: 0 }}>
                {title}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "rgba(255,255,255,.72)", padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
            {c.packagesTitle}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {c.packages.map(([title, price]) => (
              <div
                key={title}
                style={{ background: "#fff", borderRadius: 24, padding: 22, boxShadow: "0 8px 24px rgba(0,0,0,.05)" }}
              >
                <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 26, marginTop: 0 }}>
                  {title}
                </h3>
                <p style={{ color: "#8b6a42", fontWeight: 700, marginBottom: 0 }}>{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
          {c.blogTitle}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          {c.blog.map((title) => (
            <div
              key={title}
              style={{ background: "#fff", borderRadius: 24, padding: 22, boxShadow: "0 8px 24px rgba(0,0,0,.05)" }}
            >
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 24, marginTop: 0 }}>
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ background: "#1d1a17", color: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
            {c.contactTitle}
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.8, maxWidth: 760 }}>
            {c.contactText}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 18, padding: "14px 22px", background: "#fff", color: "#111", fontWeight: 700 }}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/with_joanna20/"
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: 18,
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff",
                fontWeight: 700
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(0,0,0,.06)", padding: "28px 24px", background: "#f7f2ec" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap"
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{c.brand}</div>
            <div style={{ color: "#6b7280", marginTop: 6 }}>
              {c.location} • {c.footer}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
