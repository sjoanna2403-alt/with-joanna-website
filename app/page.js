"use client";

import { useState } from "react";

const whatsappLink =
  "https://wa.me/447492828818?text=Hi%20Joanna%20I%E2%80%99d%20like%20to%20book%20a%20treatment.";

const content = {
  en: {
    brand: "With Joanna Beauty TEST",
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
        background:
          "linear-gradient(180deg, #10201c 0%, #0d1715 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh"
      }}
    >
      <nav
        style={{
          borderBottom: "1px solid rgba(212,175,55,.18)",
          background: "rgba(13,23,21,.88)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 20
        }}
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
          <img
            src="/logo-with-joanna.png.png"
            alt="With Joanna"
            style={{
              height: 76,
              width: "auto",
              display: "block",
              filter:
                "brightness(1.18) contrast(1.12) drop-shadow(0 0 8px rgba(212,175,55,0.22))"
            }}
          />

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setLang("en")}
              style={{
                border: "1px solid rgba(212,175,55,.28)",
                borderRadius: 999,
                padding: "8px 12px",
                background: lang === "en" ? "#d4af37" : "rgba(255,255,255,.06)",
                color: lang === "en" ? "#111" : "#fff",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pl")}
              style={{
                border: "1px solid rgba(212,175,55,.28)",
                borderRadius: 999,
                padding: "8px 12px",
                background: lang === "pl" ? "#d4af37" : "rgba(255,255,255,.06)",
                color: lang === "pl" ? "#111" : "#fff",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              PL
            </button>
          </div>
        </div>
      </nav>

      <section
  style={{
    maxWidth: 1100,
    margin: "40px auto",
    padding: "110px 40px 100px",
    borderRadius: 36,
    background:
      "linear-gradient(135deg, rgba(7,31,24,0.96), rgba(11,47,36,0.92))",
    border: "1px solid rgba(212,175,55,.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,.35)",
    position: "relative",
    overflow: "hidden"
  }}
>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(212,175,55,.28)",
            borderRadius: 999,
            padding: "10px 16px",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: ".22em",
            background: "rgba(255,255,255,.04)"
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
            marginTop: 20,
            marginBottom: 18
          }}
        >
          {c.title}
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,.78)",
            fontSize: 18,
            lineHeight: 1.8,
            maxWidth: 760
          }}
        >
          {c.text}
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
          <a
            href="#contact"
            style={{
              borderRadius: 18,
              padding: "14px 22px",
              background: "#d4af37",
              color: "#111",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            {c.book}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              borderRadius: 18,
              padding: "14px 22px",
              border: "1px solid rgba(212,175,55,.4)",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              background: "rgba(255,255,255,.04)"
            }}
          >
            {c.whatsapp}
          </a>
        </div>
      </section>

<section
  style={{
    maxWidth: 1100,
    margin: "40px auto",
    padding: "90px 40px",
    borderRadius: 36,
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, rgba(7,31,24,0.95), rgba(11,47,36,0.92))",
    border: "1px solid rgba(212,175,55,.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,.35)"
  }}
>
  <div
    style={{
      position: "absolute",
      top: -120,
      right: -120,
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "rgba(212,175,55,.12)",
      filter: "blur(80px)"
    }}
  />

  <div
    style={{
      position: "absolute",
      bottom: -100,
      left: -100,
      width: 260,
      height: 260,
      borderRadius: "50%",
      background: "rgba(255,255,255,.04)",
      filter: "blur(70px)"
    }}
  />
          {c.treatments.map(([title, desc]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(212,175,55,.1)",
                borderRadius: 24,
                padding: 22,
                boxShadow: "0 10px 30px rgba(0,0,0,.16)"
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  fontSize: 26,
                  marginTop: 0
                }}
              >
                {title}
              </h3>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.8, marginBottom: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "rgba(255,255,255,.03)", padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
            {c.packagesTitle}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 18
            }}
          >
            {c.packages.map(([title, price]) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(212,175,55,.1)",
                  borderRadius: 24,
                  padding: 22,
                  boxShadow: "0 10px 30px rgba(0,0,0,.16)"
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontWeight: 400,
                    fontSize: 26,
                    marginTop: 0
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#d4af37", fontWeight: 700, marginBottom: 0 }}>{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 40 }}>
            {c.contactTitle}
          </h2>
          <p style={{ color: "rgba(255,255,255,.78)", lineHeight: 1.8, maxWidth: 760 }}>
            {c.contactText}
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: 18,
                padding: "14px 22px",
                background: "#d4af37",
                color: "#111",
                fontWeight: 700,
                textDecoration: "none"
              }}
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
                border: "1px solid rgba(212,175,55,.35)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                background: "rgba(255,255,255,.04)"
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(212,175,55,.1)", padding: "28px 24px" }}>
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
            <div style={{ color: "rgba(255,255,255,.65)", marginTop: 6 }}>
              {c.location} • {c.footer}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
